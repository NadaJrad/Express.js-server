import express from "express";
const app = express();
const port = 3000;
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
