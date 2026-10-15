import { env } from 'node:process'
import express from 'express'

let app = express()
let port = Number(env.PORT ?? '3000')

app.use(express.text())

app.use((req, res, next) => {
  console.info('%s %s', req.method, req.path)
  next()
})

app.get('/health', (req, res) => {
  res.end()
})

app.get('/', (req, res) => {
  res.send('Hello, world!\n')
})

app.post('/', (req, res) => {
  res.send(req.body)
})

app.listen(port, '0.0.0.0', () => {
  console.info(`server listening on ${port}`)
})
