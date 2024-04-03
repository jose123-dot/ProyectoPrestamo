import { model, Schema } from "mongoose";
import { Decimal128 } from "mongoose";

const SolicitudEmpresaSchema = new Schema({
nombre: {
    type: String,
    required: true,
    max: 50
},

rnc: {
    type: String,
    required: true,
    max: 20
},

fax: {
    type: String,
    required: true,
    max: 25,
    unique: true
},

actividad: {
    type: String,
    required: true,
    max: 40
},

telefono: {
    type: String,
    required: true,
    max: 20
},

email: {
    type: String,
    required: true,
    max: 40
},

sitioweb: {
    type: String,
    max: 40
},

ingresosanuales:  {
    type: Decimal128,
    required: true,
},

paisfundacion: {
    type: String,
    required: true,
    max: 20
},

fechafundacion: {
    type: Date,
    required: true
},

totalactivos:{
    type: Decimal128,
    required: true,
   
},
direccion: {
    type: String,
    required: true,
    max: 70
},
sector: {
    type: String,
    required: true,
    max: 30
},
municipio: {
    type: String,
    required: true,
    max: 30
},
provincia: {
    type: String,
    required: true,
    max: 30
},
codigo: {
    type: Number,
    required: true,
},

estatus: {
    type: String,
    required: true,
    max: 10,
    default: 'Pendiente'  
},

}, 
{
    timestamps: true,
    versionKey: false,
  }
);

export default model("solicitudempresa", SolicitudEmpresaSchema)