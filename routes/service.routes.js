import express from "express";
import { createService, deleteOneService, getAllServices, getServiceById, updateServiceById } from "../controllers/services.controller.js";

const router = express.Router();

router.get('/services', getAllServices)
router.get('/services/:id', getServiceById)
router.post('/services', createService)
router.put('/services/:id', updateServiceById)
router.delete('/services/:id', deleteOneService)

export default router;