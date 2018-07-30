import * as Express from 'express'

const router = Express.Router()

router.get('/', (req: Express.Request, res: Express.Response) => {
  return res.send('Hello world.')
})

router.get('/:name', (req: Express.Request, res: Express.Response) => {
  let { name } = req.params
  return res.send(`Hello, ${name}`)
})

export default router
