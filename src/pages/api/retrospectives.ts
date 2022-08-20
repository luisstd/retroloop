import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../server/db/client'

const retrospectives = async (req: NextApiRequest, res: NextApiResponse) => {
  const examples = await prisma.retrospective.findMany()
  res.status(200).json(examples)
}

export default retrospectives
