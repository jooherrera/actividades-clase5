import { uploader } from '../utils/uploader.js'
import { Router } from 'express'
const router = Router()

const pets = []

router.get('/', (req, res) => {
  res.json(pets)
})

router.post('/', uploader.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No se pudo guardar la imagen' })
  }

  const pet = req.body
  pets.push({ ...pet, thumbnail: req.file.filename })
  res.status(201).json({ message: 'Agregado con exito' })
})

export default router
