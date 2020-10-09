import yargs from 'yargs';
import express from 'express';
import httpProxy from 'http-proxy';

const app = express();

const argv = yargs.argv;
const host = argv.host ;
const port = argv.port;

const apiProxy = httpProxy.createProxyServer();

app.all('/*', (req, res) => {
  console.log('redirecting to my webapp - http://localhost:3000');
  apiProxy.web(req, res, {target: 'http://localhost:3000'});
});

app.listen(port, host, function() {
  console.log('listening on ', host, ':', port);
});