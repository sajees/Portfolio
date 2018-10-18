const sql = require("mysql");

export default class Connection {
    constructor() {
        this.dbCon = new sql.createConnection({
            host: "localhost",
            user: "root",
            password: "drowssap",
            database: "profile"
        });
    }
    connectOpen() {
        this.dbCon.connect();
    }
    sajee() {
        this.dbCon.connect();
        this.dbCon.query("SELECT * FROM users", function(error, results, fields) {
            if (error) throw error;

            console.log(results);
        });
        this.dbCon.end();
    }
}