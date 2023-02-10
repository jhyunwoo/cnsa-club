import prisma from '../../../lib/prismadb'
import type { NextApiRequest, NextApiResponse } from 'next'
import { authOptions } from '../auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getServerSession(req, res, authOptions)
  console.log(session)
  if (req.method === 'POST') {
    const { data } = req.body
    const checkEmail = await prisma.submits.findUnique({
      where: {
        email: data.email,
      },
    })
    const checkId = await prisma.submits.findUnique({
      where: {
        studentId: Number(data.studentId),
      },
    })
    if (!checkEmail || !checkId) {
      const createSubmit = await prisma.submits.create({
        data: {
          name: data.name,
          studentId: Number(data.studentId),
          email: data.email,
          year: data.year,
          answers: data.answers,
        },
      })
      return res.status(200).json(createSubmit)
    } else {
      const updateSumbit = await prisma.submits.update({
        where: {
          studentId: Number(data.studentId),
        },
        data: {
          name: data.name,
          studentId: Number(data.studentId),
          answers: data.answers,
        },
      })
      return res.status(201).json(updateSumbit)
    }
  } else if (req.method === 'GET') {
    if (session) {
      const allSubmits = await prisma.submits.findMany()
      return res.status(200).json(allSubmits)
    } else {
      return res.status(404)
    }
  }
}
