const express = require('express');
//const res =require("espress/lib/response");
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.port || 3000;

app.use(express.static(__dirname+'/public'));

//Motor de vistas HBS de express
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');
/*
app.get("/",(req,res)=>{
    res.render("home",{
        nombre:"Juan"
    });
});*/

app.get('/', (req,res)=>{
    res.render("home",{
        

    });
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.listen(port,()=>{ 
    console.log(`Escuchando peticiones en el puerto ${port}`);
})


