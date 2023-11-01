//dependencies
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import { connectToMongodb } from "./config/dbConnection.js";
import { __404NotFoundHandler, __errorHandler } from "./middlewares/common/errorHandler.js";
import loginPageRouter from "./routes/loginRouter.js";
import inboxRouter from "./routes/inboxRouter.js";
import userPageRouter from "./routes/userRouter.js";
dotenv.config();

// initialize express app
const app = express();
//SET VIEW ENGINE

app.set("view engine", "ejs");

//use support middleware
app.use(express.static(path.resolve("public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

//Use Routes
app.use(loginPageRouter);
app.use("/inbox", inboxRouter);
app.use("/users", userPageRouter);
//Error Handler
app.use(__404NotFoundHandler);
app.use(__errorHandler);

app.listen(process.env.PORT, () => {
    connectToMongodb();
    console.log(` Server Started on port ${process.env.PORT} `.bgGreen.blue.bold);
});
