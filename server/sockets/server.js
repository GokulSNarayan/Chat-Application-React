var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var users = [];
var connections = [];
app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname })
})
// res.redirect(' http://localhost:4000');

var players = [];
io.on("connection", (socket) => {
  connections.push(socket);

  socket.on('send message', function(msg){
    console.log("Messg",msg)
    let data = [socket.id, msg];
    let newData = {
      id: socket.id,
      user_name: socket.id,
      message: msg
    }
      io.emit('new message',newData);
    });

  
    socket.on('new user',function(data, callback){
      callback(true);
      socket.username = data;
      users.push(socket.username);
      updatedUserName();
  })

  socket.on('disconnect', () => {
    console.log(socket.id, 'disconnected');
  });
})

// console.log( io );

http.listen(4008, () => {
  console.log("Listenening on port 4008");
})

function updatedUserName(){
	console.log("socket.id---",socket.id);
        io.sockets.emit('get users',users);
    }


