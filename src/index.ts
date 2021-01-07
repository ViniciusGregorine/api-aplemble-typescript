import express from 'express';
import routes from './routes'

import {execute} from './repositories/implementation/mysql'

const app = express()
const port = 3456

app.use(routes)
app.use(express.json())

app.listen(port, () => {
    console.log('listen on port: ' + port)
    execute()
})