import { Router } from "express";
import {
  getAll,
  getById,
  createOne,
  removeById,
  updateById,
} from "../controllers/contactsControllers.js";
import { validateBody } from "../helpers/validateBody.js";
import {
  addContactSchema,
  updateContactSchema,
} from "../schemas/contactsSchemas.js";

const router = Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", validateBody(addContactSchema), createOne);
router.delete("/:id", removeById);
router.put("/:id", validateBody(updateContactSchema), updateById);

export default router;
