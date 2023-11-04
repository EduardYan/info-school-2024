//Principals routes
const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  return res.render("home");
});

router.get("/math", (req, res) => {
  return res.render("subjects/math");
});

router.get("/fisics", (req, res) => {
  return res.render("subjects/fisics");
});

router.get("/science", (req, res) => {
  return res.render("subjects/science");
});

router.get("/socials", (req, res) => {
  return res.render("subjects/socials");
});

router.get("/about", (req, res) => {
  return res.render("about");
});

module.exports = router;
