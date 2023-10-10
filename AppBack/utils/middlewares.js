import jwt from "jsonwebtoken";

const checkToken = (require, response, next) => {
    console.log('Estas en el middleware');
    if(!require.headers['autorizado']){
        return response.json({ error: 'Incluye la cabecera y el token'})
    }
    const token = require.headers['autorizado']

    try{
        const payload= jwt.verify(token, 'Hola mundo mi primer token')
   
    }catch (error){
        return response.json({error: 'Verificar el token'})
    }

    next();
}   

export default checkToken;

