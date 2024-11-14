import mysql from "mysql2";

export const connection = mysql.createConnection({
    host: "172.17.1.8",
    user: "root",
    database: "todolist_slo",
    password: "1234"
});

// export function connect() {
    connection.connect(function (err) {
        if (err) {
            return console.error("Ошибка: " + err.message);
        }
        else {
            console.log("Подключение к серверу MySQL успешно установлено");
        }
    })
// };
// export function select (req, res) {
// connection.query("SELECT * FROM tasks",
//     function (err, results) {
//         if (err) {
//             console.log(err)
//             return res.json(err)
//         }
//         else return res.json(results);
//     });
// }

// const sql_add = "INSERT INTO tasks (input, completed) VALUES(?, ?)";
// const task = [" ", false];

// connection.query(sql_add, task, function (err, results) {
//     if (err) console.log(err);
//     else console.log("Данные добавлены");
// });

// const sql_del = "DELETE FROM tasks WHERE id = ?";
// connection.query(sql_del, id, function (err, results) {
//     if (err) console.log(err);
//     else console.log("Данные удалены");
// });