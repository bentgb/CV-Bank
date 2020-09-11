var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "user.db"


let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQlite database.')
        db.run('CREATE TABLE USERS (' +
            'userId INTEGER PRIMARY KEY,' +
            'user TEXT,' +
            'passCODE TEXT,' +
            'age INTEGER,' +
            'class TEXT,' +
            'userRole TEXT,' +
            'description TEXT,' +
            'userEMAIL TEXT,' +
            'CVpath TEXT )', (err) => {


            if (err) {
                // Table already created
            } else {
                // Table just created, creating some rows
                var insert = 'INSERT INTO USERS (userId, user,passCODE,age,class,userRole, description , userEMAIL, CVpath) VALUES(?,?,?,?,?,?,?,?,?)'
                db.run(insert, [10, "Aisha", "1234", 35, "Java", "student", "describe Aisha" ,"aisha@test.com", ""])
                db.run(insert, [20, "Tugba", "1234", 37, "Java", "admin", "describe Tugba", "tugba@test.com", ""])
                db.run(insert, [30, "Husamettin", "1234",37, "Java","student", "describe Husamettin","husamettin@test.com", ""])
                db.run(insert, [40, "Edwin", "1234", 27, "Java","student","describe Edwin", "edwin@test.com", ""])


            }
        })


    }
})


module.exports = db