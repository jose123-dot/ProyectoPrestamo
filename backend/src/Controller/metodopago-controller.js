import MetodoPagoModel from "../Model/metodopago-model.js";

// mostrar los datos

export const getmetodopago = async (req, res) => {
    const Metodo = await MetodoPagoModel.find();
    res.json(Metodo);
};

export const saveMetodoPago = async (req, res) => {
    const {
    nombre,
    correoelectronico,
    numeracion,
    fechavencimiento,
    CVV,
    tipo,
    } = req.body;
    const sMetodoPago = {
        nombre : nombre,
        correoelectronico : correoelectronico,
        numeracion : numeracion,
        fechavencimiento : fechavencimiento,
        CVV : CVV,
        tipo : tipo,
    };
    await MetodoPagoModel.create(sMetodoPago);
    res.send(sMetodoPago); 
} 

//Editar metodo de pago 

export const editMetodoPago = async (req, res) => {
 const {
    _id,
    nombre,
    correoelectronico,
    numeracion,
    fechavencimiento,
    CVV,
    tipo,
 } = req.body;
 const sMetodoPago =  {
    nombre : nombre,
    correoelectronico : correoelectronico,
    numeracion : numeracion,
    fechavencimiento : fechavencimiento,
    CVV : CVV,
    tipo : tipo,
 };

 await MetodoPagoModel.findByIdAndUpdate(_id, sMetodoPago);
 res.json(req.body);
};

//Eliminar metodo de pago

export const deleteMetodoPago = async (req, res) => {
    const {_id} = req.body;
    await MetodoPagoModel.findByIdAndDelete ({_id : _id});
    res.json(req.body);
};