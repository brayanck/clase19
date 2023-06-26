const express = require('express')
const session = require('express-session')
const loginRoute = require('./routes/login.routes')
const registerRoutes = require('./routes/register.routes')
const perfilRoutes = require("./routes/perfil.routes")
const handlebarsExpress  = require('express-handlebars')
const managerDb = require('./daos/ManagerDb')
const dataBaseConect = new managerDb("mongodb+srv://brayanmampaso:brayanmampaso10@cluster.r7ppmee.mongodb.net/coderLogin")
const MongoStore = require('connect-mongo')
const app= express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))
//public
app.use(express.static(__dirname+"/public"))

app.use(session({
    store:MongoStore.create({
        mongoUrl:"mongodb+srv://brayanmampaso:brayanmampaso10@cluster.r7ppmee.mongodb.net/coderLogin"
    }),
    secret: 'coderHouse',
    resave : false,
    saveUninitialized: true
}))
app.engine('handlebars', handlebarsExpress.engine());
app.set('view engine', "handlebars")
app.set("views",__dirname+"/views")

PORT= 8080 || process.env.PORT;
app.use("/login",loginRoute)
app.use("/register",registerRoutes)
app.use("/perfil",perfilRoutes)

app.listen(PORT,()=>{
    console.log("servidor corriendo en puerto "+ PORT)
    dataBaseConect.conectarse()
})
