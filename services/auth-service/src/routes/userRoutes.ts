import { Router } from 'express'
import { signUpUser } from '@/controllers/userController'

const router = Router()

// auth/signup
router.post('/signup', signUpUser)

export default router