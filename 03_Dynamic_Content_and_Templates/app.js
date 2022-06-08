const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

const publicDirectoryPath = path.join(__dirname, 'public');
app.use(express.static(publicDirectoryPath));

// routes
const { routes } = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use('/admin', routes); // adminData refers to all the exports
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000, console.log('server listening on port 3000'));