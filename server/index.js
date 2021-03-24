const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const dist = '../dist/';

const expressStatic = express.static(`${__dirname}/${dist}`);

app.use('/', expressStatic);

app.get('/*', (_, res) => res.sendFile(path.join(__dirname, `/${dist}/index.html`)));

app.listen(port);