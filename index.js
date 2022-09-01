//requerimos Express y le asignamos una constante con el mismo nombre
const express = require("express");
//requerimos el motor de plantillas Express-handlebars
const hbs = require("express-handlebars");

//creamos la aplicacion como una instancia express
const app = express();
//definimos un puerto
const PORT = 3000;

//configuracion de Express-handlebars
app.engine(".hbs", hbs.engine({extname:"hbs"}));
app.set("view engine", "hbs");
app.set("views", "./views");

//Definimos la existencia de nuestra carpeta de recursos estaticos (Public)
app.use(express.static("public"));

app.listen(PORT, (err) =>{
    ! err ?
    console.log(`Server running in http://localhost:${PORT}`)
    :
    console.error(`error launching server: ${err.code}`);
});

app.use("/",require("./appRouter"));