const router = require('express').Router()
const Email = require("../daos/models/users.model");

router.get('/', (req, res) => {
    res.render("login", {});
  });


  router.post("/crear", async (req, res) => {
    try {
      const { email, password} = req.body;
      const valiemail = await Email.findOne({ email,password });
      if(email==="adminCoder@coder.com" && password === "adminCod3r123"){
        req.session.email = email
        req.session.password = password
        req.session.rol = "admin"
        return res.redirect("/perfil")
      }
      if (valiemail) {
        req.session.email = email
        req.session.password = password
        req.session.rol = "usuario"
        res.redirect("/perfil")
      }else{
        res.send({ msg: "Usuario no existe", status: false });
      }
       
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });

  router.get("/logout",(req,res)=>{
    req.session.destroy(err=>{
        if(err) res.send("error al logout")
        res.redirect("/login")
    })
  })
module.exports =  router