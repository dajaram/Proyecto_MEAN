import express, { response }  from "express";
import userSchema from "../../models/users.model.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();


//Voy a crear mi usuario
router.post('/users', (require, response) => {
    const user = userSchema(require.body);
    user
    .save()
    .then((data) => response.json(data))
    .catch((error)=> response.json({ message: error }))
});

//Voy a crear mi arreglo de usuarios
router.post('/usersMany', (require, response) => {
    const usersData = require.body;
    userSchema.insertMany(usersData)
    .then((data) => response.json(data))
    .catch((error)=> response.json({ message: error }))
});

//Traer todos los usuarios
router.get('/users', (require, response) => {
   userSchema
   .find()
   .then((data) => response.json(data))
   .catch((error)=> response.json({ message: error }))
    
});

//Listar un usuario
router.get('/users/:id', (require, response) =>{
    const { id } = require.params;
    userSchema.findById(id)
    .then((data) => response.json(data))
   .catch((error)=> response.json({ message: error }))
});

//Actualizar usuario
router.put('/users/:id', (require, response) =>{
    const { id } = require.params;
    const { name , lastname, age } = require.body;
    userSchema.updateOne({ _id: id }, {$set:{ name, lastname, age }})
    .then((data) => response.json(data))
   .catch((error)=> response.json({ message: error }))
});

//Eliminar usuario
router.delete('/users/:id', (require, response) =>{
    const { id } = require.params;
    userSchema.deleteOne({ _id: id })
    .then((data) => response.json(data))
   .catch((error)=> response.json({ message: error }))
});

//POST registro
router.post('/register', async (require, response)=>{
    try {
        require.body.password = bcrypt.hashSync(require.body.password, 12);
        const userCreate = await userSchema.create(require.body);
        response.json(userCreate);
    }catch (error) {
        response.json({error: error.message})
    }
});
//POST login
router.post('/login', async (require, response)=>{
    //Comprobar existencia del email
    const user = await userSchema.findOne({ email: require.body.email });
    if(!user){
        return response.json({ error: 'Error, revisa tu nombre de usuario y contraseña' })
    }

    const validar = bcrypt.compareSync(require.body.password, user.password)
    if(!validar){
        return response.json({ error: 'Error, revisa tu nombre de usuario y contraseña' })
    }

    response.json({ success: 'Has ingresado con éxito', 
    token: createToken(userSchema) });
});

//TOKEN
function createToken(userSchema) {
    const payload = {
        user_id: userSchema._id,
        user_role: userSchema.user_role
    }
    return jwt.sign(payload, 'Hola mundo mi primer token')
}


export default router;