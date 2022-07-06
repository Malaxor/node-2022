const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

const publicDirectoryPath = path.join(__dirname, 'public');
app.use(express.static(publicDirectoryPath));

app.use('/admin', require('./routes/admin'));
app.use(require('./routes/shop'));

app.use(require('./controllers/error'));

app.listen(3000, console.log('server listening on port 3000'));