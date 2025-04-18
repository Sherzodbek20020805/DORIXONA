import { join } from "node:path";
import express from "express";
import cookieParser from "cookie-parser";
import router from "./router/index.js";
import { ErrorHandlerMiddleware } from "./middleware/error-handler.middleware.js";
import { BaseException } from "./exception/base.exception.js";
import pageRouter from "./router/page.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", join(process.cwd(), "src", "views"));

app.use("/uploads", express.static(join(process.cwd(), "uploads")));

app.use("/api", router);
app.use("/", pageRouter);

app.all("/*", (req, res, next) => {
  try {
    throw new BaseException(
      `Given ${req.url} with method: ${req.method} not found`,
      404
    );
  } catch (error) {
    next(error);
  }
});

app.use(ErrorHandlerMiddleware);

export default app;
