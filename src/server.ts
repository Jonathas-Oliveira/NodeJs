import express from 'express'
import Routes from './routes/route'

const app = express()
app.use(express.json())

app.use(Routes)
app.listen(3333, () => console.log('Server Started on port 3333!'))
