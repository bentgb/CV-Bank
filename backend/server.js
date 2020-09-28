var express = require("express");
var app = express();
var cors = require('cors');
var db = require("./dataDB.js");
var multer = require("multer");
const path = require('path');
const fs = require('fs');
app.use(cors());
app.use(express.static('public'));
var storage = multer.diskStorage({
    destination: function(req, file, cb) {

        if (file.fieldname === "resume") { // if uploading resume
            cb(null, './resumes/');
        }else if (file.fieldname === "coverletter"){ // else uploading coverletter
            cb(null, './coverletters/');
        }
        else if (file.fieldname === "certificate"){ // else uploading coverletter
            cb(null, './certificates/');
        }

        else if (file.fieldname === "image"){ // else uploading image
            cb(null, './images/');
        }
    },
    filename: (req, file, cb) => { // naming file
        cb(null, req.params.id+file.fieldname+path.extname(file.originalname));
    }
});

var upload = multer({ storage: storage,
    limits:{
        fileSize:10*1024*1024
    },
});
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

app.get('/api/uploads/resumes/:id', (request, response, next) => {


        fs.access(`resumes/${request.params.id}resume.pdf`, function (err, data) {
            const options = {'root': "resumes"};
            if (err) {
                next(err) // Pass errors to Express.
            } else {
                response.sendFile(`${request.params.id}resume.pdf`, options)
            }
        })

    });


app.get('/api/uploads/coverletters/:id', (request, response, next) => {


        fs.access(`coverletters/${request.params.id}coverletter.pdf`, function (err, data) {
            const options = {'root': "coverletters"};
            if (err) {
                next(err) // Pass errors to Express.
            } else {
                response.sendFile(`${request.params.id}coverletter.pdf`, options)
            }
        })

});

app.get('/api/uploads/images/:id', (request, response, next) => {


        fs.access(`images/${request.params.id}image.jpg`, function (err, data) {
            const options = {'root': "images"};
            if (err) {
                next(err) // Pass errors to Express.
            } else {
                response.sendFile(`${request.params.id}image.jpg`, options)
            }
        })

});

app.get('/api/uploads/certificates/:id', (request, response, next) => {

    fs.access(`certificates/${request.params.id}certificate.pdf`,function (err, data) {
        var options = {'root':"certificates"};
        if (err) {
            next(err) // Pass errors to Express.
        } else {
            response.sendFile(`${request.params.id}certificate.pdf`, options)
        }
    })
});

//<editor-fold desc="User handle">
app.put("/api/users/:id", (req,res,next)=>
    {
        var data={
            userId:req.body.userId,
            description:req.body.description,
        }
        var sql ='UPDATE USERS SET description= ? WHERE userId = ?'
        var params =[data.description,req.params.id]
        db.run(sql, params, function (err, result) {
            if (err){
                res.status(400).json({"error": err.message})
                return;
            }
            res.json({
                "message": "success",
                "USERS": data,
                "id" : this.lastID
            })
        });
    }
)
app.post("/api/upload/resume/:id", upload.single("resume"), (req, res) =>{
    if (!req.file) {
        console.log("No file received");
        alert("Error! in file upload.");
    } else {
        console.log('file received');
        var sql = 'UPDATE USERS SET CVpath= ? WHERE userId = ?'
        var params =[req.file.path,req.params.id]
        db.run(sql, params, function (err, result) {
            if (err){
                res.status(400).json({"error": err.message})
                return;
            }
            res.json({
                "message": "success",
                "filePath": req.file,
                "id": req.params.id
            })
        });
    }
})
app.post("/api/upload/coverletter/:id", upload.single("coverletter"), (req, res) =>{
    if (!req.file) {
        console.log("No file received");
        alert("Error! in file upload.");
    } else {
        console.log('file received');
        res.json({
            "message": "success",
            "filePath": req.file,
            "id": req.params.id
        })

/*        var sql = 'UPDATE USERS SET CVpath= ? WHERE userId = ?'
        var params =[req.file.path,req.params.id]
        db.run(sql, params, function (err, result) {
            if (err){
                res.status(400).json({"error": err.message})
                return;
            }
            res.json({
                "message": "success",
                "filePath": req.file,
                "id": req.params.id
            })
        });*/
    }
})
app.post("/api/upload/certificate/:id", upload.single("certificate"), (req, res) =>{
    if (!req.file) {
        console.log("No file received");
        alert("Error! in file upload.");
    } else {
        console.log('file received');
        res.json({
            "message": "success",
            "filePath": req.file,
            "id": req.params.id
        })

/*        var sql = 'UPDATE USERS SET CVpath= ? WHERE userId = ?'
        var params =[req.file.path,req.params.id]
        db.run(sql, params, function (err, result) {
            if (err){
                res.status(400).json({"error": err.message})
                return;
            }
            res.json({
                "message": "success",
                "filePath": req.file,
                "id": req.params.id
            })
        });*/
    }
})
app.post("/api/upload/image/:id", upload.single("image"), (req, res) =>{
    if (!req.file) {
        console.log("No file received");
        alert("Error! in file upload.");
    } else {
        console.log('file received');
        res.json({
            "message": "success",
            "filePath": req.file,
            "id": req.params.id
        })

/*        var sql = 'UPDATE USERS SET CVpath= ? WHERE userId = ?'
        var params =[req.file.path,req.params.id]
        db.run(sql, params, function (err, result) {
            if (err){
                res.status(400).json({"error": err.message})
                return;
            }
            res.json({
                "message": "success",
                "filePath": req.file,
                "id": req.params.id
            })
        });*/
    }
})


app.post("/api/users/login", (req, res, next) => {
    var sql = "select userId, user,passCODE,age,class,userRole, description, userEMAIL, CVpath from USERS WHERE passCode = ? AND user = ?";
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
app.get("/api/allusers", (req, res, next) => {
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