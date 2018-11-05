var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});


io.on('connection', socket => {
    // 这是所有连接到服务端的socket.id
    mySocket[socket.id] = socket;
    console.log('id', socket.id);

    // 记录用户名，用来记录是不是第一次进入
    let username, color, rooms = [];
    // 监听客户端发过来的消息

// 监听客户端发过来的消息
socket.on('message', msg => {
    io.emit('message', msg);
})
});
http.listen(3000, function(){
    console.log('listening on *:3000');
});