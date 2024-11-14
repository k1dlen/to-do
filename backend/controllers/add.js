import { connection } from "../connectDB.js";



export function add(req, res) {
    const task = req.body.input;
    console.log(task);

    const sql_add = "INSERT INTO tasks (input) VALUES(?)";
    connection.query(sql_add, task,
        function (err, results) {

            if (err) console.log(err);
            else console.log("Данные добавлены");
        })
};