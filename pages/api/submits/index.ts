import prisma from '../../../lib/prismadb'
import type { NextApiRequest, NextApiResponse } from 'next'
import { authOptions } from '../auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getServerSession(req, res, authOptions)
  if (session) {
    if (req.method === 'POST') {
      const { data } = req.body

      const createSubmit = await prisma.submits.create({
        data: {
          studentId: Number(data.studentId),
          year: data.year,
          answers: data.answers,
          club: data.club,
          user: {
            connect: {
              email: session.user?.email,
            },
          },
        },
      })
      return res.status(200).json(createSubmit)
    } else if (req.method === 'GET') {
      const userSubmits = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
        select: {
          submits: true,
        },
      })
      res.status(200).json(userSubmits)
    }
  } else {
    res.status(404)
  }
}
