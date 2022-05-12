const express = require("express");
const path = require("path");
const app = express();

const PORT = 8080;
const { db } = require("./db");

const startServer = async () => {
    try {
       await db.sync();
       app.listen(PORT, () => {
           console.log(`Server is running on port ${PORT}!~`);
       });
    } catch (error) {
        console.error(error);
    }
}
startServer();

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static middleware
app.use(express.static(__dirname + '/public'));

app.use('/api', require('./api'));

app.get('*', (req, res, next) => {
  res.sendFile('./public/index.html', { root: __dirname });
});

// error handling middleware
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== 'test') console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

module.exports = app;
