var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var users = [];
var connections = [];
var sockets = [];
// app.get('/', (req, res) => {
//   res.sendFile('index.html', {root: __dirname })
// })
// res.redirect(' http://localhost:4000');

var players = [];
io.on("connection", (socket) => {

  connections.push(socket);
// console.log("connections===>>",connections)
  socket.on('send message', function(msg){
    let data = [socket.id, msg];
    let newData = {
      id: socket.id,
      user_name: socket.username,
      message: msg
    }
    console.log("Messg",socket.username)
      io.emit('new message',newData);
    });

  
    socket.on('new user',function(data){
      // console.log("username===>>",data)
     if(!(sockets.includes(socket.id))){
      socket.username = data;
      users.push({id:socket.id,name:socket.username});
      sockets.push(socket.id)
      updatedUserName();
    }
    
    })
        function updatedUserName(){
          console.log("socket.id---",socket.id);
                io.emit('get users',users);
            }

  socket.on('disconnect', () => {
    users.splice(users.indexOf(socket.username),1);
        updatedUserName();
        connections.splice(connections.indexOf(socket),1);
    console.log(socket.id, 'disconnected');
  });
})

// console.log( io );

http.listen(4008, () => {
  console.log("Listenening on port 4008");
})



