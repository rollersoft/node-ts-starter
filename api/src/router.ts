import { Router } from 'express'

const router = Router()

router.get('/ping', async (req, res, next) => {
  res.status(200).json({ success: true })
})

export default router
