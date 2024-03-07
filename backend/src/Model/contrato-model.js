import {model, schema} from "mongoose";

const ContratoSchema = new schema ({
    idcontrato : {
        type : Number,
        required: true,
        unique : true,
    },

    idusuario : {
        type : schema.types.ObjectId,
        ref : idusuario,
    },

    idrevisionsolicitud : {
        type : schema.types.ObjectId,
        ref : idrevisionsolicitud,
    },

    idmetodopago : {
    type : schema.types.ObjectId,
    ref : idmetodopago,
}, 

monto : {
    type : decimal,
    max : 18.2,
    required : true,
},
tasanumberes : {
    type : decimal,
    max : 5.2,
    required : true,
},

fechainicio : {
    type : Datetime,
    required : true,
},

duracionmeses : {
    type : Number,
    required : true,
},

diapago : {
    type : Datetime,
    required : true,
}, 

}); 

export default model ("contrato", ContratoSchema);