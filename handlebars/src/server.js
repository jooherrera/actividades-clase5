import express from 'express'
import { engine } from 'express-handlebars'
import userRouter from './routes/users.routes.js'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

app.use(userRouter)

/* ----------------------- Configuracion de Handlebars ---------------------- */
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './src/views')
/* ------------------------------------ - ----------------------------------- */

app.listen(5000, () => console.log('Server on'))
