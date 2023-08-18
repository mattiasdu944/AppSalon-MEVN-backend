import { db } from "../config/index.js";
import User from "../models/users.js";

import { handleErrorMessage } from "../helpers/handle-error-message.js";


export const register = async ( req, res ) => {
    //TODO: Valida los campos
    if( Object.values(req.body).includes('') ){
        return handleErrorMessage('Credenciales invalidas', res)
    }

    const { email, name, password } = req.body;

    //TODO: Evita duplicados
    await db.connect();
    const userExist = await User.findOne({ email });


    if( userExist ){
        await db.disconnect();
        return handleErrorMessage('El usuario ya esta registrado', res)
    }

    //TODO: Min characters for password
    if( password.length < 8 ){
        return handleErrorMessage('La contraseña es muy corta', res)
    }

    const user = new User(req.body);
    await user.save();
    await db.disconnect();

    return res.json({
        message: 'Usuario creado',
        data: user
    });

}

