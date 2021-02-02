import express from 'express'
import routes from './routes'
import cors from 'cors'

const app = express()
const port = 3456

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use(routes)



app.listen(port, () => {
    console.log('listen on port: ' + port)
})