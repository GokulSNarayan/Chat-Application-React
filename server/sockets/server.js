var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var moment = require('moment');
var users = [];
var connections = [];
var sockets = [];


io.on("connection", (socket) => {

  connections.push(socket);
// console.log("connections===>>",connections)
  socket.on('send message', function(msg){
    let newData = {
      socket_id: socket.id,
      user_name: socket.username,
      message: msg,
      date: moment(Date.now()).format('LT')
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


    socket.on('user left',(id,username)=>{
      console.log("data",id,username)
      users.splice(users.findIndex(x => x.id == id),1);
        updatedUserName();
        // connections.splice(connections.indexOf(socket),1);
    })
        function updatedUserName(){
          console.log("users",users);
                io.emit('get users',users);
            }

  socket.on('disconnect', (socket) => {
    users.splice(users.findIndex(x => x.id == socket.id),1);
        updatedUserName();
        connections.splice(connections.indexOf(socket),1);
    console.log(socket.id, 'disconnected');
  });
})

// console.log( io );

http.listen(4008, () => {
  console.log("Listenening on port 4008");
})



