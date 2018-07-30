import * as Express from 'express'

const app = Express()

app.get('/', (req: Express.Request, res: Express.Response) => {
  return res.send('Hello world.')
})

app.get('/:name', (req: Express.Request, res: Express.Response) => {
  let { name } = req.params
  return res.send(`Hello, ${name}`)
})

app.listen(3000, () => {
  console.log('> Ready on http://localhost:3000')
})

export default app
