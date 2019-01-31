const tmi - require('tmi.js');

const options - {
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
  }
};
