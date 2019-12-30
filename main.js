const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    /*console.log(req.body);*/
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    res.send("the result is: " + result);
});

app.get("/texascalculator", (req, res) => {
    res.sendFile(__dirname + "/texasCalculator.html");
});

app.post("/texascalculator", (req, res) => {
    /*console.log(req.body);*/
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var texas = weight / (height * height);
    res.send("the result is: " + texas);
});


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});