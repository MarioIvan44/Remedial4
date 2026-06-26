import express from "express";
import appointmentsController from "../controllers/appointmentsController.js";

const router = express.Router();

router.get("/", appointmentsController.get);
router.get("/:id", appointmentsController.getById);
router.post("/", appointmentsController.create);
router.put("/:id", appointmentsController.update);
router.delete("/:id", appointmentsController.delete);

export default router;