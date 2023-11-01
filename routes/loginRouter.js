import express from "express";
import { getLoginPage } from "../controllers/pageControllers/loginPageController.js";
import { decorateHtmlResponse } from "../middlewares/common/decorateHtmlResponse.js";

const loginPageRouter = express.Router();
loginPageRouter.route("/").get(decorateHtmlResponse("Login"), getLoginPage);

export default loginPageRouter;
