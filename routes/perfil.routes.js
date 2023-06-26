const router = require('express').Router()
const Email = require("../daos/models/users.model");

router.get('/', (req, res) => {
    if(req.session.email){
        const session =req.session
        res.render("perfil",{session});
    }else{
        res.redirect("/login")
    }
    
  });


module.exports =  router