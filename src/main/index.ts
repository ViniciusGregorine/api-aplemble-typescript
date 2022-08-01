import sensorRoutes from './routes/sensorRoute'
import readingRoutes from './routes/readingRoute'
import rootRoute from './routes/rootRoute'
import placeRoute from './routes/placeRoute'
import instituionsRouter from './routes/institutionsRoute'
import swaggerDocs from './config/swagger.json'

import swaggerUi from 'swagger-ui-express'
import cors from 'cors'
import express from 'express'

export const port = 3456

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use(sensorRoutes)
app.use(readingRoutes)
app.use(rootRoute)
app.use(placeRoute)
app.use(instituionsRouter)


app.listen(port, () => {
    console.log('running on: http://localhost:' + port) 
})
