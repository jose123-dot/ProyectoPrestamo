import {model, Schema} from "mongoose"

const SolicitudRevisionSchema = new Schema ({
solicitudrevisionid :{
    type : Number,
    required : true,
    unique: true,
},
idusuario : {
    type : Schema.ObjectId,
    ref: idusuario,
}, 
estatusaprobacion : {
    type: String,
    required : true,
},
fecha : {
    type : datetime,
},

});

export default model ("solicitudrevision", SolicitudRevisionSchema);