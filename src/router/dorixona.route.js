import { Router } from "express";
import dorixonaController from "../controller/dorixona.controller.js";
import { ValidationMiddleware } from "../middleware/validation.middleware.js";
import { Protected } from "../middleware/protected.middleware.js";
import {
  createCategorySchema,
  updateCategorySchema,
} from "../schema/dorixona.schema.js";
import { Roles } from "../middleware/roles.middleware.js";
import { ROLES } from "../constants/role.constants.js";

const dorixonaRouter = Router();

dorixonaRouter
  .get(
    "/",
    Protected(false),
    Roles(ROLES.ALL),
    dorixonaController.getAllCategories
  )
  .get(
    "/:id",
    Protected(false),
    Roles(ROLES.ALL),
    dorixonaController.getOneCategory
  )
  .post(
    "/",
    // Protected(true),
    // Roles(ROLES.RESTAURANT_OWNER, ROLES.SUPER_ADMIN),
    ValidationMiddleware(createCategorySchema),
    dorixonaController.createCategory
  )
  .put(
    "/:id",
    Protected(true),
    Roles(ROLES.RESTAURANT_OWNER, ROLES.SUPER_ADMIN),
    ValidationMiddleware(updateCategorySchema),
    dorixonaController.updateCategory
  )
  .delete(
    "/:id",
    Protected(true),
    Roles(ROLES.RESTAURANT_OWNER, ROLES.SUPER_ADMIN),
    dorixonaController.deleteCategory
  );

export default dorixonaRouter;
