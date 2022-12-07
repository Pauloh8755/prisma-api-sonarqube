'use strict'
import { Router } from 'express'
import userRouter from './user.js'

const router = new Router()

router.get('/healths', (_, res) => res.status(200).json({ status: 'UP' }))
router.use('/user', userRouter)

export default router
