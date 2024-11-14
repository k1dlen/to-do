import express from 'express'
import { select } from './controllers/select.js'
import { add } from './controllers/add.js'
import { sql_delete } from './controllers/delete.js'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


app.get('/', select)
app.post("/add", add)
app.post("/delete", sql_delete)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})