const { io } = require('../server');

exports.socket = () =>
  io.on('connection', (client) => {
    console.log('User connected');
    client.emit('sendMessage', { user: 'Admin', message: 'Welcome!' })
    client.on('disconnect', () => {
      console.log('User disconnect');
    })
    client.on('sendMessage', (data, callback) => {
      console.log(data);
      client.broadcast.emit('sendMessage', data)
      // if (message.user) {
      //   callback({
      //     response: 'all went well'
      //   })
      // } else {
      //   callback({ response: 'everything went wrong' });

      // }
    })
  })