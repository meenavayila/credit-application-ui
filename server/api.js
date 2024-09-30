const cors = require("cors");
const express = require("express");
const fs = require('fs');
const path = require("path");
const app = express();

app.use(cors());

app.get("/",(request,response)=>{
    response.send("<h1>welcome to api</h1>");
    response.end();
});

app.get("/api/termsandconditions",(request,response)=>{
    response.setHeader('Content-Type', 'application/json')
    const rawdata = fs.readFileSync(path.join(__dirname, "/resources", "tscs.json"), "utf8");
    const tscs = JSON.parse(rawdata);
    response.send(tscs);
    response.end();
});


app.listen(5050);
console.log('server started:http://127.0.0.1:5050');