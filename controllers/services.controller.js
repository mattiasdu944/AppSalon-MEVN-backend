import { db } from "../config/index.js";
import Services from "../models/services.js";

import { validateObjectId } from "../helpers/validate-object-id.js";
import { handleErrorMessage } from "../helpers/handle-error-message.js";

export const getAllServices = async (req, res) => {
    await db.connect();
    const services = await Services.find();
    await db.disconnect();
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
        message: 'Serivicio creado correctamente',
        data: result
    })
}

export const getServiceById = async (req, res) => {
    const { id } = req.params;

    if( !validateObjectId(id) ){
        return res.status(404).json({
            message: 'No se encontro el serivicio'
        });
    }



    return res.json( await validateService(req, res, id) )
}

export const updateServiceById = async (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    
    if( !validateObjectId(id) ){
        return handleErrorMessage('Servicio no valido', res )
    }

    await db.connect();
    const service = await Services.findById(id);
    console.log(service)
    if( !service ){
        await db.disconnect();
        return handleErrorMessage('Servicio no encontrado', res)
    }
    
    service.name = name || service.name;
    service.price = price || service.price ;
    await service.save();
    await db.disconnect();

    return res.json({
        message: 'Serivicio actualizado correctamente',
        data: service
    })
    
}


export const deleteOneService = async ( req, res ) => {
    const { id } = req.params;
    
    if( !validateObjectId(id) ){
        return handleErrorMessage('Servicio no valido', res )
    }
    
    await db.connect();
    const service = await Services.findById(id);
    
    if( !service ){
        await db.disconnect();
        return handleErrorMessage('Servicio no encontrado', res)
    }

    await service.deleteOne();
    await db.disconnect();

    return res.json({
        message: 'Serivicio eliminado correctamente',
    })
}
