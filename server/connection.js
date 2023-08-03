import mysql from "mysql2"

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Grasshopper-81",
    database: "users_db",
});

export default db;
