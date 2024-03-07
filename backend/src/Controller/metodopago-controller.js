import MetodoPagoModel from "../Model/metodopago-model.js";

// mostrar los datos

export const getmetodopago = async (req, res) => {
    const Metodo = await MetodoPagoModel.find();
    res.json(Metodo);
};

export const saveMetodoPago = async (req, res) => {
    const {
   idmetodopago,
   tipo,
   estatus,
    } = req.body;
    const sMetodoPago = {
        idmetodopago :idmetodopago,
        tipo : tipo,
        estatus : estatus,
    };
    await MetodoPagoModel.create(sMetodoPago);
    res.send(sMetodoPago); 
} 

//Editar metodo de pago 

export const editMetodoPago = async (req, res) => {
 const {
    idmetodopago,
   tipo,
   estatus,
 } = req.body;
 const sMetodoPago =  {
    idmetodopago :idmetodopago,
    tipo : tipo,
    estatus : estatus,
 };

 await MetodoPagoModel.findByIdAndUpdate(idmetodopago, sMetodoPago);
 res.json(req.body);
};

//Eliminar metodo de pago

export const deleteMetodoPago = async (req, res) => {
    const {_id} = req.body;
    await MetodoPagoModel.findByIdAndDelete ({idmetodopago : idmetodopago});
    res.json(req.body);
};