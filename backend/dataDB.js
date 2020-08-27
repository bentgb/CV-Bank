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
            'user TEXT,passCODE TEXT,' +
            'userEMAIL TEXT )', (err) => {
                if (err) {
                    // Table already created
                } else {
                    // Table just created, creating some rows
                    var insert = 'INSERT INTO USERS (user,passCODE,userEMAIL) VALUES(?,?,?)'
                    db.run(insert, ["Aisha", "1234", "aisha@test.com"])
                    db.run(insert, ["Tugba", "1234", "tugba@test.com"])
                    db.run(insert, ["Husamettin", "1234", "husamettin@test.com"])
                    db.run(insert, ["Fatma", "1234", "fatma@test.com"])
                    db.run(insert, ["Jack", "1234", "jack@test.com"])
                    db.run(insert, ["test", "1234", "test@iths.se"])


                }
            })

    }
})


module.exports = db