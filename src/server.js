require("dotenv").config();
import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";

let app = express();
// use body-parser to post data
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//config view engine
configViewEngine(app);
//init all web routes
initWebRoutes(app);

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App is running at the port ${port}`);
});