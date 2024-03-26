const express =require('express');
//const dotenv=require('dotenv');
const path = require('path');
const morgan=require('morgan');
const bodyParser = require('body-parser');
const app=express();



//dotenv.config({path:'config.env'})
//const PORT=process.env.PORT||8080

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended:true}))

app.set("View engine","ejs")
//app.set("views",path.resolve(__dirname,"views/ejs"))

app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))


app.get('/',(req,res)=>{
   res.render('index')

})

app.listen(3036,()=>{console.log("server is running on http://localhost:3036")});
