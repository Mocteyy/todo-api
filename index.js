const express = require("express");
const cors = require("cors");

const myApp = express();

myApp.use(cors())
myApp.get('/testing', (req, res) => {
    res.json({
        success: true,
        message: "Hola EC2 desde el back"
    });
});

myApp.listen(8080, () => {
    console.log("Listening from 8080");
})