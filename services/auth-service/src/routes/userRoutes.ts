import { Router } from 'express'
import { signUpUser, signInUser, checkExistEmail } from '@/controllers/userController'

const router = Router()

// auth/signup
router.post('/signup', signUpUser)
router.post('/signin', signInUser)
router.get('/email', checkExistEmail)

export default router