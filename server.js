const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.static("public"));
app.use(logger)

console.log("Starting Server");

app.set('view engine','ejs');

app.get("/", (req, res) =>{
    res.render("home");
});

const dashboardRouter = require('./routes/dashboard')
app.use('/dashboard',dashboardRouter)

function logger(req, res, next){
    var date = new Date();
    var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
    var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
    console.log('[' + current_date + " " + current_time + '] ' + req.hostname + ' ' + req.method +  ' ' + req.protocol + ' ' + req.originalUrl + ' '+ res.statusCode);
    next()
}
app.listen(PORT, (err)=>{
    console.log(`Server listening on Port : ${PORT}`)
});