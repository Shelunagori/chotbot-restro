import express from "express";
import homepageController from "../controllers/homepageController";
import facebookController from "../controllers/facebookController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/",homepageController.getHomepage);
    router.get("/webhook",facebookController.getWebhook);
    router.post("/webhook",facebookController.postWebhook);
    return app.use("/",router);
}

module.exports = initWebRoutes;