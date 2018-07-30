import * as Express from 'express'
import route from '../routes/'

const app = Express()

app.use('/api', route)

app.listen(3000, () => {
  console.log('> Ready on http://localhost:3000')
})

export default app
