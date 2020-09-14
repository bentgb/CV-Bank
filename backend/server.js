var express = require("express");
var app = express();
var cors = require('cors');
var db = require("./dataDB.js");
var multer = require("multer");
const path = require('path'); // for getting file extension

app.use(cors());
app.use(express.static('public'));
git

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => { // setting destination of uploading files
        if (file.fieldname === "resume") { // if uploading resume
            cb(null, './uploads/cvs/');
        } else if (file.fieldname === "coverletter") { // if uploading resume
            cb(null, './uploads/coverletters/');
        }

        else { // else uploading image
            cb(null, './uploads/photos/');
        }
    },
    filename: (req, file, cb) => { // naming file
        // cb(null, req.params.id + "CV.pdf");
        cb(null, file.fieldname+"-"+path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    if (file.fieldname === "resume" || file.fieldname === "coverletter") { // if uploading resume
        if (
            file.mimetype === 'application/pdf'
            // ||
            // file.mimetype === 'application/msword' ||
            // file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ) { // check file type to be pdf, doc, or docx
            cb(null, true);
        } else {
            cb(null, false); // else fails
        }
    } else { // else uploading image
        if (
            file.mimetype === 'image/png' ||
            file.mimetype === 'image/jpg' ||
            file.mimetype === 'image/jpeg'
        ) { // check file type to be png, jpeg, or jpg
            cb(null, true);
        } else {
            cb(null, false); // else fails
        }
    }
};


var upload=  multer(
    {
        storage: fileStorage,
        limits:
            {
                fileSize:'2mb'
            },
        fileFilter: fileFilter
    });


// app.use(
//     multer(
//         {
//             storage: fileStorage,
//             limits:
//                 {
//                     fileSize:'2mb'
//                 },
//             fileFilter: fileFilter
//         }
//     ).fields(
//         [
//             {
//                 name: 'resume',
//                 maxCount: 1
//             },
//             {
//                 name: 'coverletter',
//                 maxCount: 1
//             },
//             {
//                 name: 'image',
//                 maxCount: 1
//             }
//         ]
//     )
// );


// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, req.params.id + "CV.pdf");
//     }
// });
//
// var upload = multer({
//     storage: storage,
//     limits: {
//         fileSize: 10 * 1024 * 1024
//     },
// });

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
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
            response.status(400).json({"error": err.message});
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
            response.status(400).json({"error": err.message});
            return;
        }
        response.json({
            "message": "success",
            "user": row
        })

    });
});
app.get('/api/uploads/cvs/z:id', (request, response, next) => {
    console.log(request.params.id)
    response.sendFile("..\\backend\\uploads\\" + request.params.id + "CV.pdf")


});

//<editor-fold desc="User handle">
app.put("/api/new_user", (req, res, next) => {

    var txtdata = req.body.email.toString();
    txtdata = txtdata.toLowerCase();
    txtdata = [txtdata];
    txtdata.push(req.body.user.toString());
    var sql = "select userId from USERS where userEMAIL = ? OR user = ?";
    var params = txtdata;
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        if (rows.length === 1) {
            res.json({
                "Message": "User already exists"
            })

        } else {
            insert = "INSERT INTO USERS (user,passCODE,userEMAIL) VALUES(?,?,?)";
            db.run(insert, [req.body.user, req.body.pass, txtdata[0]]);
            sql = "select userId,user,userEMAIL from USERS where userEMAIL = ?";
            params = [txtdata[0]];
            db.all(sql, params, (err2, rows2) => {
                res.json(rows2);
            });

        }
    });
});

app.put("/api/users/:id", (req, res, next) => {
        var data = {

            userId: req.body.userId,

            description: req.body.description,

        }

        var sql = 'UPDATE USERS SET description= ? WHERE userId = ?'
        var params = [data.description, req.params.id]
        db.run(sql, params, function (err, result) {
            if (err) {
                res.status(400).json({"error": err.message})
                return;
            }
            res.json({
                "message": "success",
                "USERS": data,
                "id": this.lastID
            })
        });


    }
)


app.post("/api/upload/cvs/:id", upload.single("file"), (req, res) => {

    if (!req.file) {
        console.log("No file received");
        alert("Error! in file upload.");


    } else {
        console.log('file received');

        var sql = 'UPDATE USERS SET CVpath= ? WHERE userId = ?'
        var params = [req.file.path, req.params.id]
        db.run(sql, params, function (err, result) {
            if (err) {
                res.status(400).json({"error": err.message})
                return;
            }
            res.json({
                "message": "success",
                "filePath": req.file.path,
                "id": req.params.id
            })

        });
    }
})


app.post("/api/users/login", (req, res, next) => {
    var sql = "select userId, user,passCODE,age,class,userRole, description, userEMAIL from USERS WHERE passCode = ? AND user = ?";
    var params = [req.body.pass, req.body.user];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        // else if (rows.length === 0)
        res.json(rows);
    });
});


app.get("/api/allusers", (req, res, next) => {
    var sql = "select * from users"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "success",
            "users": rows
        })
    });
});



