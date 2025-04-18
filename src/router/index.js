import { Router } from "express";
import dorixonaRouter from "./dorixona.route.js";
import doriRouter from "./dori.route.js";
import userRouter from "./user.route.js";
import orderRouter from "./order.route.js";

const router = Router();

router
  .use("/dorixona", dorixonaRouter)
  .use("/dori", doriRouter)
  .use("/users", userRouter)
  .use("/orders", orderRouter);

export default router;


