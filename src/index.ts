import sensorRoutes from './routes/sensorRoute'
import readingRoutes from './routes/readingRoute'
import rootRoute from './routes/rootRoute'

import express from 'express'
import cors from 'cors'
import placeRoute from './routes/placeRoute'
import instituionsRouter from './routes/institutionsRoute'


const app = express()
const port = 3456

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(sensorRoutes)
app.use(readingRoutes)
app.use(rootRoute)
app.use(placeRoute)
app.use(instituionsRouter)


app.listen(port, () => {
    console.log('running on: http://localhost:' + port)
})
