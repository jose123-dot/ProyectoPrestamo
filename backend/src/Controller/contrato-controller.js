import contratoModel from "../Model/contrato-model.js";
import ContratoModel from "../Model/contrato-model.js"; 

// mostart todos los datos

export const getcontrato = async (req, res) => {
    const Contrato = await ContratoModel.find();
    res.json(Contrato);
}; 

export const saveContrato = async (req, res) => {
    const {
    idcontrato,
    idusuario,
    idrevisionsolicitud,
    idmetodopago,
    tasanumberes,
    fechainicio,
    duracionmeses,
    monto,
    diapago,
    } = req.body;
    const sContrato = {
       idcontrato : idcontrato,
       idusuario : idusuario,
       idrevisionsolicitud : idrevisionsolicitud,
       idmetodopago : idmetodopago,
       tasanumberes : tasanumberes,
       fechainicio : fechainicio,
       duracionmeses : duracionmeses,
       monto : monto,
       diapago : diapago,
    };
    await contratoModel.create(sContrato);
    res.send(sContrato); 
};

//editar contrato

export const editContrato = async (req, res) => {
    const {
        idcontrato,
        idusuario,
        idrevisionsolicitud,
        idmetodopago,
        tasanumberes,
        fechainicio,
        duracionmeses,
        monto,
        diapago,
    } = req.body; 

    const sContrato = {
        idcontrato : idcontrato,
        idusuario : idusuario,
        idrevisionsolicitud : idrevisionsolicitud,
        idmetodopago : idmetodopago,
        tasanumberes : tasanumberes,
        fechainicio : fechainicio,
        duracionmeses : duracionmeses,
        monto : monto,
        diapago : diapago,  
    };

    await ContratoModel.findByIdAndUpdate(idcontrato, sContrato);
    res.json(req.body);
};

//Eliminar contrato 

export const deleteContrato = async (req, res) => {
    const {_id} = req.body;
    await ContratoModel.findByIdAndDelete ({idcontrato : idcontrato});
    res.json(req.body);
};