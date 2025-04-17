import path from "node:path";
import express from "express";
import cookieParser from "cookie-parser";
import router from "./router/index.js";
import { ErrorHandlerMiddleware } from "./middleware/error-handler.middleware.js";
import { BaseException } from "./exception/base.exception.js";
// import pageRouter from "./route/page.route.js";
import methodOverride from "method-override";
import morgan from "morgan";

const app = express();

app.use(methodOverride("_method"));

if (process.env.NODE_ENV?.trim() == "development") {
  app.use(morgan("tiny"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src", "views"));

app.use(cookieParser());

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.use("/", router);
// app.use("/", pageRouter);

app.all("/*", (_, res, __) => {
  res.render("404");
});

app.use(ErrorHandlerMiddleware);

export default app;
