const router = require("express").Router();
const Email = require("../daos/models/users.model");

router.get("/", (req, res) => {
  res.render("register", {});
});

router.post("/crear", async (req, res) => {
  try {
    const email = req.body.email;
    const emailCheck = await Email.findOne({ email });
    if (emailCheck) {
      return res.json({ msg: "Email está en uso", status: false });
    }
    const valiemail = new Email(req.body);
    const savedEmail = await valiemail.save();
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});
module.exports = router;
