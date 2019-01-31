const tmi = require('tmi.js');

const options = {
  options: {
    debug: true,
  },
  connection: {
    cluster: 'aws',
    reconnect: true,
  },
  identity: {
    username: 'TestBot1',
    password: 'oauth:3hli0fd76gw628wgr1p2ruc0janvos',
  },
  channels: ['jengelstengel'],
};

const client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
  client.action('jengelstengel', 'Hello, TestBot1 is now connected');
});

client.on('chat', (channel, user, message, self) => {
  if (message === '!test') {
    client.action('jengelstengel', 'This is a test message!');
  }
});
