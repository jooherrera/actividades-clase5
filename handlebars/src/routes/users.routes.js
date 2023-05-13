import { Router } from 'express'

const router = Router()

const users = []

router.get('/', (req, res) => {
  //Logica para buscar al usuario....

  //Si el usuario es admin
  // const isAdmin = true

  //Si el usuario NO es admin
  const isAdmin = false

  res.render('index', { users, title: 'Mi sitio', isAdmin })
})
router.get('/register', (req, res) => {
  res.render('register', { title: 'Registrar usuario' })
})

router.post('/user', (req, res) => {
  const user = req.body
  users.push(user)
  res.redirect('/')
})

export default router
