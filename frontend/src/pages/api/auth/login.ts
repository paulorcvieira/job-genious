// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cookie from 'cookie'
import type { NextApiRequest, NextApiResponse } from 'next'
import api from 'services/api'

type Data = {
  error?: string
  success?: boolean
  token?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method === 'POST') {
    const { username, password } = req.body

    try {
      const response = await api.post('/token', {
        username,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if(response.data.access) {
        const token = response.data.access

        res.setHeader('Set-Cookie', [
          cookie.serialize('access', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 15, // 15 days
            path: '/'
          })
        ])

        return res.status(200).json({ success: true, token })
      } else {
        res.status(response.status).json({ error: 'Authentication failed' })
      }
    } catch (error: any) {
      res.status(error.response.status).json(
        { error: error.response && error.response.data.message }
      )
    }
  }

  return res.status(200).json({ success: false })
}
