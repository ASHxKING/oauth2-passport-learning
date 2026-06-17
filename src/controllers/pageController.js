import db from "../config/pg.js";


const showHomePage = (req, res) => {
  res.render("home.ejs");
};

const showSecretsPage = async (req,res)=>{
   const result = await db.query(
      "SELECT secret FROM users WHERE email=$1",
      [req.user.email]
   );
   res.render("secrets.ejs",{
      secret: result.rows[0].secret || "Share your Secret"
   });
}

const postSecret = async (req,res)=>{
  try {
    await db.query("UPDATE public.users SET secret= $1 WHERE email=$2",[req.body.secret,req.user.email])
    res.redirect("/secrets")
  } catch (err) {
    console.log(err)
  }
}

const showSubmitPage = (req, res) => {
  res.render("submit.ejs");
};

export {
  showHomePage,
  showSecretsPage,
  showSubmitPage,
  postSecret
};