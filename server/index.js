import express from "express";
import authRoutes from './routes/auth.js';
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

app.use ((req, res, next) =>{
  res.header("Access-Control-Allow-Credentials", true)
  next()
})
app.use(express.json())
app.use(
  cors({
    origin: "http://localhost:3000",
  }));
app.use(cookieParser());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api/auth", authRoutes)
//app.use("/api/users", userRoutes)


app.listen(3001, () => {
    console.log("running server");
});