// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cookie from 'cookie'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  success?: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method === 'POST') {
      res.setHeader('Set-Cookie', [
        cookie.serialize('access', "", {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          maxAge: 0,
          path: '/'
        })
      ])

      return res.status(200).json({ success: true })
  }

  return res.status(200).json({ success: false })
}
