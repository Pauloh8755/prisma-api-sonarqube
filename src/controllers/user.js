'use strict'
import logger from '../utils/logger.js'
import { PrismaClient } from '@prisma/client'
import { ResponseError } from '../helpers/index.js'
import { code, message, status } from '../utils/constants.js'
import { formatResponseError } from '../utils/formatResponse.js'

const prisma = new PrismaClient()

const createUser = async (req, res) => {
  try {
    const { name, email } = req.body

    const user = await prisma.user.create({
      data: {
        name,
        email
      }
    })

    return res.status(200).json(user)
  } catch (error) {
    logger.error(error)
    return formatResponseError(res, error, code.CREATE_USER_ERROR)
  }
}
const findUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await prisma.user.findUnique({ where: { id: Number(id) } })

    if (!user)
      throw new ResponseError({
        message: message.USER_NOT_FOUNT,
        code: code.FIND_USER_ERROR,
        status: status.NOT_FOUND
      })

    return res.status(200).json(user)
  } catch (error) {
    logger.error(error)
    return formatResponseError(res, error, code.FIND_USER_ERROR)
  }
}

const findAllUsers = async (_, res) => {
  try {
    const users = await prisma.user.findMany()
    return res.status(200).json(users)
  } catch (error) {
    logger.error(error)
    return formatResponseError(res, error, code.FIND_ALL_USERS_ERROR)
  }
}

export { findAllUsers, createUser, findUser }
