import createError from "http-errors";
export const __404NotFoundHandler = (req, res, next) => {
    next(createError(404, "Requested Url not found !"));
};

export const __errorHandler = (err, req, res, next) => {
    if (res.locals.html) {
        res.render("error", {
            title: "Error Page",
            errorStatus: err.status || 500,
            error: process.env.NODE_ENV === "development" ? err.stack : err.message,
        });
    } else {
        res.json({ error: process.env.NODE_ENV === "development" ? err.stack : err.message });
    }
};
