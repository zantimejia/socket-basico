const socket = io();

socket.on('connect', () => {
  console.log('Connected to the server');
})
socket.on('disconnect', () => {
  console.log('we lost connection to the server');
})
socket.on('sendMessage', (message) => {
  console.log('message server: ', message);
})
socket.emit('sendMessage', { user: 'Santiago', message: 'Hi!' }, response => {
  console.log('response server: ', response);
})