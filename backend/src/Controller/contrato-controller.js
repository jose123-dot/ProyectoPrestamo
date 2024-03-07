import contratoModel from "../Model/contrato-model.js";
import ContratoModel from "../Model/contrato-model.js"; 

// mostart todos los datos

export const getcontrato = async (req, res) => {
    const Contrato = await ContratoModel.find();
    res.json(Contrato);
}; 

export const saveContrato = async (req, res) => {
    const {
    nombre,
    apellido,
    documento,
    nacionalidad,
    direccion,
    telefono,
    correoelectronico,
    sexo,
    apodo,
    ocupacion,
    sueldo,
    fechainicio,
    intereses,
    fechafin,
    monto,
    } = req.body;
    const sContrato = {
        nombre : nombre,
        apellido : apellido,
        documento : documento,
        nacionalidad : nacionalidad,
        direccion : direccion,
        telefono : telefono,
        correoelectronico : correoelectronico,
        sexo : sexo,
        apodo : apodo,
        ocupacion : ocupacion,
        sueldo : sueldo,
        fechainicio : fechainicio,
        intereses : intereses,
        fechafin : fechafin,
        monto : monto,
    };
    await contratoModel.create(sContrato);
    res.send(sContrato); 
};

//editar contrato

export const editContrato = async (req, res) => {
    const {
        _id,
        nombre,
        apellido,
        documento,
        nacionalidad,
        direccion,
        telefono,
        correoelectronico,
        sexo,
        apodo,
        ocupacion,
        sueldo,
        fechainicio,
        intereses,
        fechafin,
        monto,
    } = req.body; 

    const sContrato = {
        nombre : nombre,
        apellido : apellido,
        documento : documento,
        nacionalidad : nacionalidad,
        direccion : direccion,
        telefono : telefono,
        correoelectronico : correoelectronico,
        sexo : sexo,
        apodo : apodo,
        ocupacion : ocupacion,
        sueldo : sueldo,
        fechainicio : fechainicio,
        intereses : intereses,
        fechafin : fechafin,
        monto : monto,   
    };

    await ContratoModel.findByIdAndUpdate(_id, sContrato);
    res.json(req.body);
};

//Eliminar contrato 

export const deleteContrato = async (req, res) => {
    const {_id} = req.body;
    await ContratoModel.findByIdAndDelete ({_id : _id});
    res.json(req.body);
};