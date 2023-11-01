import express from "express";
import { getUserPage } from "../controllers/pageControllers/userPageController.js";
import { decorateHtmlResponse } from "../middlewares/common/decorateHtmlResponse.js";

const userPageRouter = express.Router();
userPageRouter.route("/").get(decorateHtmlResponse("Users"), getUserPage);

export default userPageRouter;
