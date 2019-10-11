var client = require('socket.io-client')('http://localhost:4000');


const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

// var data = {
//   "name":"Gekko"
// }

// client.on('connect' +)
process.stdin.on('keypress', (key, data) => {
  if (data.ctrl && data.name === 'c') {
    process.exit();
  } else {
    switch (data.name) {
      case 'up':
        client.emit('keypressed', data.name);
        break;
      case 'down':
        client.emit('keypressed', data.name);
        break;
      case 'left':
        client.emit('keypressed', data.name);
        break;
      case 'right':
        client.emit('keypressed', data.name);
        break;
    }
  }
});
console.log('Press a key');