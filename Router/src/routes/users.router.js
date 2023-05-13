import { Router } from "express";

const router = Router()

const users = []

router.get('/',(req,res) => {
    res.json(users)
})

router.post('/',(req,res) => {
    const user = req.body
    users.push(user)
    res.sendStatus(201)
})

export default router

