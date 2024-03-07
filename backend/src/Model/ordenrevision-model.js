import {model, Schema} from "mongoose";

const OrdenRevisionPrestamoSchema = new Schema ({
ordenrevisionid: {
    type: Number,
    unique: true,
    required : true,
},
idsolicitudpersona: {
    type :Schema.ObjectId,
    ref: solicitudpersonaModel,
},
idsolicitudempresa : {
    type: Schema.ObjectId,
    ref : solicitudempresa,
},
idusuario: {
    type: Schema.ObjectId,
    ref : idusuario,
}, 
estatus : {
    type : String,
    required : true,
    max : 20,
},

fecha: {
    type : datetime,
    required : true,
},

});

export default model ("ordenrevision", OrdenRevisionPrestamoSchema);