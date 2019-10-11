var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname })
})
// res.redirect(' http://localhost:4000');

var players = [];
io.on("connection", (socket) => {
  //  console.log("Id",socket)

  socket.on('chat message', function(msg){
      io.emit('chat message',socket.id, msg);
    });

  // socket.on('keypressed',(key)=>{
  //   console.log(`Key pressed by ${socket.id} is ${key}`)
  // })
  // socket.join('mmr11')

  // socket.on('keypressed', (key) => {
  //   console.log(`Key pressed by ${socket.id} is ${key}`)
  // })


  socket.on('disconnect', () => {
    console.log(socket.id, 'disconnected');
  });
})

http.listen(4000, () => {
  console.log("Listenening on port 4000");
})


