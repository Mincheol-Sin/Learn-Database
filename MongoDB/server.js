const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));


const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb+srv://cheole720:82137405a@cluster0.jbmb4cn.mongodb.net/?retryWrites=true&w=majority', function(err, client) {
    //연결되면 할 일
    if (err) {
        return console.log('접속이 실패되었습니다.')
    };

    app.listen(8080, function(){
        console.log('listening on 8080');

    const db = client.db('todoapp');

    app.post('/add', function(req, res) {
        db.collection('post').insertOne({ 제목: req.body.title, 날짜: req.body.date }, (err, rst) => {
            console.log('저장완료', req.body.title, req.body.date);

        });
    });
    
    });

});


app.get('/write', function(req, res) {
    res.sendFile(__dirname + '/write.html');
});

app.get('/beauty', function(req, res) {
    res.send("뷰티용품 쇼핑 페이지임");
});

