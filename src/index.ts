import express from 'express';
import routes from './routes'



const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}));

const port = 3456

app.use(routes)


app.listen(port, () => {
    console.log('listen on port: ' + port)
})