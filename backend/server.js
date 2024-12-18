import express from 'express'
import { select } from './controllers/select.js'
import { add } from './controllers/add.js'
import { sql_delete } from './controllers/delete.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import { connection } from './connectDB.js'
import { update } from './controllers/update.js'

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


app.get('/', select)
app.post("/update", update)
app.patch("/update", update)
app.post("/add", add)
app.post("/delete", sql_delete)
app.delete("/delete/:id", function(req, res){
  const id = req.params.id;
  // const id = req.query.id;
  console.log(id);
  connection.query("DELETE FROM tasks WHERE id=?", [id], function(err, data) {
    if (err) console.log(err);
    else console.log("Данные удалены");
    res.redirect("/");
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})