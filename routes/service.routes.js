import express from "express";
import { createService, getAllServices } from "../controllers/services.controller.js";

const router = express.Router();

router.get('/services', getAllServices)
router.post('/services', createService)

export default router;