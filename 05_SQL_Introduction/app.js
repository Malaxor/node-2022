const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./utils/db');

// dynamic template initialization
app.set('view engine', 'pug');
app.set('views', 'views');
// body parser
app.use(bodyParser.urlencoded({ extended: false }));
// public paths 
const publicDirectoryPath = path.join(__dirname, 'public');
app.use(express.static(publicDirectoryPath));
// routes
app.use('/admin', require('./routes/admin'));
app.use(require('./routes/shop'));
// 404
app.use(require('./controllers/error'));

app.listen(3000, console.log('server listening on port 3000'));