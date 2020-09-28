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
            'CVpath TEXT ,' +
            'photoPath TEXT )', (err) => {


            if (err) {
                // Table already created
            } else {
                // Table just created, creating some rows
                var insert = 'INSERT INTO USERS (userId, user,passCODE,age,class,userRole, description , userEMAIL, CVpath, photoPath) VALUES(?,?,?,?,?,?,?,?,?,?)'

                db.run(insert, [1, "Tuba", "1234", 37, "Java", "admin", "I am admin", "tugba@test.com", "", "test.jpg"])
                db.run(insert, [2, "Aisha", "1234", 35, "Java", "student", "I like front end. I want to get job" ,"aisha@test.com", "", "test.jpg"])
                db.run(insert, [3, "Husam", "1234",37, "Java","student", "I am Java developer. I want to get job.","husam@test.com", "", "test.jpg"])
                db.run(insert, [4, "Edwin", "1234", 27, "Web","student","I like developing web applications", "edwin@test.com", "", "test.jpg"])
                db.run(insert, [5, "Joseph", "1234", 27, "Tester","student","I am a tester", "edwin@test.com", "", "test.jpg"])
                db.run(insert, [6, "Azmat", "1234", 27, "Tester","student","I am a tester", "Azmat@test.com", "", "test.jpg"])
                db.run(insert, [7, "Mark", "1234", 35, "Java", "student", "Hello" ,"Mark@test.com", "", "test.jpg"])
                db.run(insert, [8, "Tim", "1234",37, "Java","student", "Hej","Mark@test.com", "", "test.jpg"])
                db.run(insert, [9, "Sara", "1234", 27, "Java","student","Hello from Sara", "Sara@test.com", "", "test.jpg"])
                db.run(insert, [10, "Eva", "1234", 27, "Web","student","I am a webapp-developer", "Eva@test.com", "", "test.jpg"])
                db.run(insert, [11, "Can", "1234", 27, "Tester","student","I am a tester", "Can@test.com", "", "test.jpg"])
                db.run(insert, [12, "Karl", "1234", 35, "Java", "student", "Hi" ,"Karl@test.com", "", "test.jpg"])
                db.run(insert, [13, "Josephine", "1234",37, "Java","student", "I am Josephine. I want to get job.","Josephine@test.com", "", "test.jpg"])
                db.run(insert, [14, "Martin", "1234", 27, "Web","student","I like developing web applications", "1234@test.com", "", "test.jpg"])
                db.run(insert, [15, "Michael", "1234", 27, "Tester","student","I am a tester", "Michael@test.com", "", "test.jpg"])
                db.run(insert, [16, "Sam", "1234", 27, "Tester","student","I am a tester", "Azmat@test.com", "", "test.jpg"])
                db.run(insert, [17, "Sonya", "1234", 35, "Java", "student", "Hello","Sonya@test.com", "", "test.jpg"])
                db.run(insert, [18, "Tamara", "1234",37, "Java","student", "Hej","Tamara@test.com", "", "test.jpg"])
                db.run(insert, [19, "Ali", "1234", 27, "Java","student","Hello from Sara", "Ali@test.com", "", "test.jpg"])
                db.run(insert, [20, "Veli", "1234", 27, "Web","student","I am a webapp-developer", "Veli@test.com", "", "test.jpg"])
                db.run(insert, [21, "Berk", "1234", 27, "Tester","student","I am a tester", "Berk@test.com", "", "test.jpg"])
                db.run(insert, [22, "Elena", "0000", 35, "Java", "student", "Hi" ,"Elenal@test.com", "", "test.jpg"])
                db.run(insert, [23, "Johanna", "0000",37, "Java","student", "I am Johanna. I want to get job.","Johanna@test.com", "", "test.jpg"])
                db.run(insert, [24, "Mud", "0000", 27, "Web","student","I like developing web applications", "Mud@test.com", "", "test.jpg"])
                db.run(insert, [25, "Rolf", "0000", 27, "Tester","student","I am a tester", "Rolf@test.com", "", "test.jpg"])
                db.run(insert, [26, "Sandra", "0000", 27, "Tester","student","I am a tester", "Sandra@test.com", "", "test.jpg"])
                db.run(insert, [27, "Mimmi", "0000", 35, "Java", "student", "Hello","Mimmi@test.com", "", "test.jpg"])
                db.run(insert, [28, "Jenny", "0000",37, "Java","student", "Hej","Jenny@test.com", "", "test.jpg"])
                db.run(insert, [29, "Hans", "1234", 27, "Java","student","Hello from Hans", "Hans@test.com", "", "test.jpg"])
                db.run(insert, [30, "Erik", "1234", 27, "Web","student","I am a webapp-developer", "Erik@test.com", "", "test.jpg"])
                db.run(insert, [31, "Carina", "1234", 27, "Tester","student","I am a tester", "Carina@test.com", "", "test.jpg"])

            }
        })


    }
})


module.exports = db