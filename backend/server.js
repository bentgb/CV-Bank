
var express = require("express");
var app = express();
var cors = require('cors');
var db = require("./dataDB.js");


app.use(cors());
app.use(express.static('public'));

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var HTTP_PORT = 3000;
//</editor-fold>

//Start the server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port: " + HTTP_PORT);
});



app.get('/api/users', (request, response, next) => {
    const sql = 'select * from users where userRole <> ?';
    const params = ['admin'];
    db.all(sql, params, (err, rows) => {
        if (err) {
            response.status(400).json({ "error": err.message });
            return;
        }
        response.send({
            "message": "success",
            "users": rows
        })
    });
});
app.get('/api/users/:id', (request, response, next) => {
    const sql = 'select * from users where userId = ?'
    const params = [request.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
            response.status(400).json({"error":err.message});
            return;
        }
        response.json({
            "message":"success",
            "user":row
        })

    });
});

//<editor-fold desc="User handle">
app.put("/api/new_user", (req, res, next) => {

    var txtdata=req.body.email.toString();
    txtdata=txtdata.toLowerCase();
    txtdata=[txtdata];
    txtdata.push(req.body.user.toString());
    var sql = "select userid from USERS where userEMAIL = ? OR user = ?";
    var params = txtdata;
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        if (rows.length === 1) {
            res.json({
                "Message":"User already exists"
            })

        }else{
            insert = "INSERT INTO USERS (user,passCODE,userEMAIL) VALUES(?,?,?)";
            db.run(insert,[req.body.user,req.body.pass,txtdata[0]]);
            sql = "select userid,user,userEMAIL from USERS where userEMAIL = ?";
            params = [txtdata[0]];
            db.all(sql, params, (err2,rows2) => {
                res.json(rows2);
            });

        }
    });
});

app.post("/api/users/login", (req, res, next) => {
    var sql = "select userId,user,userEMAIL from USERS WHERE passCode = ? AND user = ?";
    var params = [req.body.pass,req.body.user];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        // else if (rows.length === 0)
        res.json(rows);
    });
});




app.get("/api/users", (req, res, next) => {
    var sql = "select * from users"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"success",
            "users":rows
        })
    });
});



