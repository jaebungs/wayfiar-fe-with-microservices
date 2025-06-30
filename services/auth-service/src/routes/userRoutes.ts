import { Router } from 'express'
import { signUpUser, checkExistEmail } from '@/controllers/userController'

const router = Router()

// auth/signup
router.post('/signup', signUpUser)
router.get('/email', checkExistEmail)

export default router