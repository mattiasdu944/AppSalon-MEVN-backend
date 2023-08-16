import { services } from "../data/beauty-data.js";
import { db } from "../config/index.js";
import Services from "../models/services.js";

export const getAllServices = async (req, res) => {
    res.json(services);
}

export const createService = async (req, res) => {

    if( Object.values(req.body).includes('') ){
        const error = new Error('Todos los datos son obligatorios')
        return res.status(400).json({
            message: error.message
        });
    }

    const service = new Services(req.body);
    
    await db.connect();
    const result = await service.save()
    await db.disconnect();

    return res.json({
        message: 'Serivicio creado',
        data: result
    })
}