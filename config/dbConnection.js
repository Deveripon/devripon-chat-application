import mongoose from "mongoose";
import createError from "http-errors";

export const connectToMongodb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
        console.log(" Mongodb connection Sucessfully established ".bgMagenta);
    } catch (err) {
        console.log(err.message);
        throw createError(err.message);
    }
};
