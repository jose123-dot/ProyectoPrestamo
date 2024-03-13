import mongoose from "mongoose";

const {Schema} = mongoose

const AprobacionGaranteSchema = new Schema({
idaprobaciongarante : {
    type : Number,
    required : true,
    unique : true,
},

idgarante : {
    type : Schema.Types.ObjectId,
    ref : "idgarante",
},

idaprobacion : {
    type : Schema.Types.ObjectId,
    ref : "idaprobacionsolicitud",
}, 

idusuario : {
    type : Schema.Types.ObjectId,
    reft : "idusuario",
},

estatus : {
    type : String,
    required : true,
    max : 15,
},

fecha : {
    type : datetime,
    required : true,
},

observaciones : {
    type : String,
    required : false,
    max : 100,
},


});

export default moongose.model("aprobaciongarante", AprobacionGaranteSchema); 