'use strict'
import { Router } from 'express'
import * as userController from '../controllers/user.js'

const router = new Router()

router.get('/:id', async (req, res) => userController.findUser(req, res))
router.post('/', async (req, res) => userController.createUser(req, res))
router.get('/', async (req, res) => userController.findAllUsers(req, res))

export default router
