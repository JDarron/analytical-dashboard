require("dotenv").config();

const express = require('express')
    , bodyParser = require('body-parser')
    , path = require('path')
    , apiRoutes = require('./app_api/routes/api.route');

const port = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './app_client/build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './app_client/build', 'index.html'));
});

app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});