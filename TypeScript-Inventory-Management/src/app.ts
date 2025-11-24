import express from "express";
import path from "path";
import bodyParser from "body-parser";
import routes from "./routes/routes";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", routes);

export default app;
