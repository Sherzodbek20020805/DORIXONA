import { Router } from "express";
// import DorixonaRouter from "./dorixona.route.js";
// import doriRouter from "./dori.route.js";
import userRouter from "./user.route.js";
// import orderRouter from "./order.route.js";

const router = Router();

router
  // .use("/categories", DorixonaRouter)
  // .use("/foods", doriRouter)
  .use("/users", userRouter)
  // .use("/orders", orderRouter);

export default router;