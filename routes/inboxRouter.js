import express from "express";
import { getInboxPage } from "../controllers/pageControllers/inboxPageController.js";
import { decorateHtmlResponse } from "../middlewares/common/decorateHtmlResponse.js";

const inboxRouter = express.Router();
inboxRouter.route("/").get(decorateHtmlResponse("Inbox"), getInboxPage);

export default inboxRouter;
