import { Router } from 'express'

const rootRoute = Router()


rootRoute.get('/', (req, res) => {
    return res.status(201).send({massege: 'como vai amigo'})
})

export default rootRoute