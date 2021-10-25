const localtunnel = require('localtunnel');

(async () => {
  const tunnel = await localtunnel({ port: 3456 });
  console.log('running')
  // the assigned public url for your tunnel
  // i.e. https://abcdefgjhij.localtunnel.me
  const url = tunnel.url;

  console.log(url)

  tunnel.on('close', () => {
    // tunnels are closed
    
  });
})();