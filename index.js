import express from "express";
import axios from "axios";
const app = express();
const port = 3000;
app.get("/",async(res,req) =>{
    try{
        const response = await axios.get("https://bored-api.appbrewery.com/random");
        res.render("index.ejs"),{activity:response.data};
    } catch(error){
        console.error("failed to make  the request:",error.message);
        res.Status(500).send("fail to fetch the request please try agin!");
    } 
});
app.get ("/", (req,res) =>{
res.send("Hello World!");
});
app.get ("/about", (req,res) =>{
    res.send("<h1>Hello</h1><p>My name is Nada</p>");
    });
app.get ("/contact", (req,res) =>{
        res.send("<h1>contact me </h1><p>email: nadajradbenaicha@gmail.com</p>");
        });
app.listen(port,() => {
    console.log(`the server runing in port ${port}`);
});
