"use strict";

let express = require('express'),
    compression = require('compression'),
    http = require('http'),
    url = require('url'),
    bodyParser = require('body-parser'),
    serveStatic = require('serve-static'),
    config = require('./config');

let app = express();

app.set('port', config.port);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(serveStatic('client'));

let server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log(`Server listening at http://${server.address().address}:${server.address().port}`);
});
