import path from "node:path";
import express from "express";
import cookieParser from "cookie-parser";
import router from "./router/index.js";
import { ErrorHandlerMiddleware } from "./middleware/error-handler.middleware.js";
import { BaseException } from "./exception/base.exception.js";



const app = express();



app.use(express.json());


app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.use("/", router);




app.use(ErrorHandlerMiddleware);

export default app;
