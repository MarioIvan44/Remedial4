import express from "express";
import usersController from "../controllers/usersController.js";

const router = express.Router();

router.get("/", usersController.get);
router.get("/:id", usersController.getById);
router.put("/:id", usersController.update);
router.delete("/:id", usersController.delete);

export default router;