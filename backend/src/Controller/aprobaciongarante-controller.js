import aprobaciongaranteModel from "../Model/aprobaciongarante-model.js";
import aprobaciongarante from "../Model/aprobaciongarante-model.js";

//mostar todos los datos de la aprobacion

export const getaprobaciongarante = async (req, res) => {
    const AprobacionGrnt = await aprobaciongarante.find();
    res.json(AprobacionGrnt);
}; 

export const saveaprobaciongarante = async (req, res) => {
    const {
        idaprobaciongarante,
        idgarante,
        idaprobacion,
        idusuario,
        estatus,
        fecha,
        observaciones,
    } = req.body;
    const saprobaciongarante = {
        idaprobaciongarante : idaprobaciongarante,
        idgarante : idgarante,
        idaprobacion : idaprobacion,
        idusuario : idusuario,
        estatus : estatus,
        fecha : fecha,
        observaciones : observaciones,
    };
    await aprobaciongaranteModel.create(saprobaciongarante);
};

//editar aprobacion garante

export const editarAprobacionGarante = async (req, resp) => {
    const {
        idaprobaciongarante,
        idgarante,
        idaprobacion,
        idusuario,
        estatus,
        fecha,
        observaciones,
    } = req.body;
    const saprobaciongarante = {
        idaprobaciongarante : idaprobaciongarante,
        idgarante : idgarante,
        idaprobacion : idaprobacion,
        idusuario : idusuario,
        estatus : estatus,
        fecha : fecha,
        observaciones : observaciones,
    };

    await aprobaciongaranteModel.FindByIdAndUpdate(idaprobaciongarante,saprobaciongarante);
    res.json(req.body);
};

//Eliminar aprobacion de garante
export const deleteaprobaciongarante = async (req, res) => {
    const {idaprobaciongarante} = req.body;
    await aprobaciongaranteModel.FindByIdAndDelete ({idaprobaciongarante : idaprobaciongarante});
    res.json(req.body);
};

    

