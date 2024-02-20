import express from "express";
import dotenv from "dotenv";
import "./passport/github.auth.js";
import userprofile from "./routes/user.routes.js";
import Auth from "./routes/authroute.routes.js";
import exploreroute from "./routes/explore.routes.js";
import cors from "cors";
import connectdb from "./db/connectdb.js";
import passport from "passport";
import session from "express-session";
import path from "path";

const PORT = process.env.PORT || 8080;
const __dirname = path.resolve();
dotenv.config();
const app = express();
app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.listen(PORT, () => {
  console.log("running at the port" + PORT);
  connectdb();
});

app.use("/api/user", userprofile);
app.use("/api/auth", Auth);
app.use("/api/explore", exploreroute);
app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
