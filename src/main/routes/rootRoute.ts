import { Router } from 'express'

const rootRoute = Router()


rootRoute.get('/', (req, res) => {
    return res.redirect('/api-doc');
})

export default rootRoute