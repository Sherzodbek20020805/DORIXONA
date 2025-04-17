import { Router } from "express";
import doriController from "../controller/dori.controller.js";
import { ValidationMiddleware } from "../middleware/validation.middleware.js";
import { createdoriSchema, updatedoriSchema } from "../schema/dori.schema.js";
import { upload } from "../config/multer.config.js";
import { ROLES } from "../constants/role.constants.js";
import { Roles } from "../middleware/roles.middleware.js";
import { Protected } from "../middleware/protected.middleware.js";

const doriRouter = Router();

doriRouter
  .get("/", Protected(false), Roles(ROLES.ALL), doriController.getAlldorilar)
  .get("/:id", Protected(false), Roles(ROLES.ALL), doriController.getOnedori)
  .post(
    "/",
    Protected(true),
    Roles(ROLES.RESTAURANT_OWNER, ROLES.SUPER_ADMIN),
    upload.single("image"),
    ValidationMiddleware(createdoriSchema),
    doriController.createdori
  )
  .patch(
    "/:id",
    Protected(true),
    Roles(ROLES.RESTAURANT_OWNER, ROLES.SUPER_ADMIN),
    ValidationMiddleware(updatedoriSchema),
    doriController.updatedori
  )
  .delete(
    "/:id",
    Protected(true),
    Roles(ROLES.RESTAURANT_OWNER, ROLES.SUPER_ADMIN),
    doriController.deletedori
  );

export default doriRouter;
