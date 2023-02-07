import prisma from '../../../lib/prismadb'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { data } = req.body
    const checkEmail = await prisma.submits.findUnique({
      where: {
        email: data.email,
      },
    })
    if (!checkEmail) {
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
          email: data.email,
        },
        data: {
          name: data.name,
          studentId: Number(data.studentId),
          answers: data.answers,
        },
      })
      return res.status(201).json(updateSumbit)
    }
  }
}
