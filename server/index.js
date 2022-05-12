const express = require("express");
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

app.use(express.static(__dirname + '/public'));
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// localhost
app.get('/', (req, res) => {
    res.send("Hello :)");
});