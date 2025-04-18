import { Router } from "express";
import dorixonaController from "../controller/dorixona.controller.js";
import { ValidationMiddleware } from "../middleware/validation.middleware.js";
import { Protected } from "../middleware/protected.middleware.js";
import {
  createdorixonaSchema,
  updatedorixonaSchema,
} from "../schema/dorixona.schema.js";
import { Roles } from "../middleware/roles.middleware.js";
import { ROLES } from "../constants/role.constants.js";

const dorixonaRouter = Router();

dorixonaRouter
  .get(
    "/",
    Protected(false),
    Roles(ROLES.ALL),
    dorixonaController.getAlldorixona
  )
  .get(
    "/:id",
    Protected(false),
    Roles(ROLES.ALL),
    dorixonaController.getOnedorixona
  )
  .post(
    "/",
    // Protected(true),
    // Roles(ROLES.RESTAURANT_OWNER, ROLES.SUPER_ADMIN),
    ValidationMiddleware(createdorixonaSchema),
    dorixonaController.createdorixona
  )
  .put(
    "/:id",
    Protected(true),
    Roles(ROLES.RESTAURANT_OWNER, ROLES.SUPER_ADMIN),
    ValidationMiddleware(updatedorixonaSchema),
    dorixonaController.updatedorixona
  )
  .delete(
    "/:id",
    Protected(true),
    Roles(ROLES.RESTAURANT_OWNER, ROLES.SUPER_ADMIN),
    dorixonaController.deletedorixona
  );

export default dorixonaRouter;
  


