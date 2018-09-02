var express = require('express');
var multer  = require('multer');
var upload = multer();

var app = express();

app.use(express.static('./assets'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/fileanalyse', upload.single('upfile'), function (req, res) {
    if(req.file) {//if a file has been uploaded show it's details
        res.json({name: req.file.originalname, type: req.file.mimetype, size: req.file.size});
    }else {//otherwise show the error
        res.json({error: 'Please upload a file.'});
    }
});

app.listen(3000);
