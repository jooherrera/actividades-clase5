import express from 'express'
import petsRouter from './routes/pets.router.js'
import usersRouter from './routes/users.router.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/images', express.static('public/img'))
app.use(express.static('public'))

app.use('/api/pets/', petsRouter)
app.use('/api/users', usersRouter)

app.listen(5000, () => console.log('Server on:'))
