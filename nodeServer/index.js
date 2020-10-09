const yargs = require('yargs');
const express = require('express');
const path = require('path');

const app = express();
const { argv } = yargs;
const port = argv.port || 81;
const host = argv.host || 'localhost';

const pathDist = path.join(__dirname, '../', 'dist/');
app.use('/', express.static(pathDist));

app.get('/', (req, res) => {
  res.sendFile(path.join(pathDist, 'index.html'));
});

app.listen(port, host, () => {
  console.log('listening on ', host, ':', port);
});
