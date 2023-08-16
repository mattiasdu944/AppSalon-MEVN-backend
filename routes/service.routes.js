import express from "express";
import { createService, deleteOneService, getAllServices, getServiceById, updateServiceById } from "../controllers/services.controller.js";

const router = express.Router();

router.route('/services')
    .get(getAllServices)
    .post(createService);

router.route('/services/:id')
    .get(getServiceById)
    .put(updateServiceById)
    .delete(deleteOneService);


export default router;