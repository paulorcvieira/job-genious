// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cookie from 'cookie'
import type { NextApiRequest, NextApiResponse } from 'next'

import api from 'services/api'

import { User } from 'interfaces/User'

type Data = {
  message?: string
  success?: boolean
  user?: User
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method === 'GET') {
    const cookies = cookie.parse(req.headers.cookie || '')

    const access = cookies.access || false

    if(!access) {
      return res.status(401).json({
        message: 'Login first to load user'
      })
    }

    try {
      const response = await api.get('/me', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${access}`
        }
      })

      if(response.data) {
        return res.status(200).json({
          user: response.data,
        })
      }
    } catch (error: any) {
      res.status(error?.response.status).json(
        { message: 'Something went wrong while retrieving user' }
      )
    }
  }

  return res.status(200).json({ success: false })
}
