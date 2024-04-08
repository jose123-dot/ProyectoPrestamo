import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
const ClienteSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
    },

    password: {
      type: String,
    },
    nombre: {
      type: String,
      max: 40,
      require: true,
    },
    apellido: {
      type: String,
      max: 40,
      require: true,
    },
    apodo: {
      type: String,
      max: 30,
    },
    nacionalidad: {
      type: String,
      max: 30,
      require: true,
    },
    sexo: {
      type: String,
      max: 20,
      require: true,
    },
    tipodocumento: {
      type: String,
      max: 20,
      required: true,
    },
    documento: {
      type: String,
      max: 30,
      require: true,
      unique: true,
    },
    ocupacion: {
      type: String,
      max: 40,
      require: true,
    },
    telefonoresidencial: {
      type: String,
      max: 20,
    },
    celular: {
      type: String,
      max: 20,
      require: true,
    },
    direccion: {
      type: String,
      max: 30,
      require: true,
    },
    noresidencia: {
      type: String,
      max: 8,
    },
    sector: {
      type: String,
      max: 30,
    },
    municipio: {
      type: String,
      max: 30,
      require: true,
    },
    provincia: {
      type: String,
      max: 30,
      require: true,
    },
    direccionfamiliar: {
      type: String,
      max: 70,
    },
    cargotrabajo: {
      type: String,
      max: 40,
    },
    direcciontrabajo: {
      type: String,
      max: 70,
    },
    ingreso: {
      type: Number,
      require: true,
    },
    otrosingresos: {
      type: Boolean,
      require: true,
    },
    poseeinmueble: {
      type: Boolean,
      require: true,
    },
    valorinmueble: {
      type: Number,
    },
    poseevehiculo: {
      type: Boolean,
      require: true,
    },
    valorvehiculo: {
      type: Number,
    },
    nombreEmpresa: {
      type: String,
      max: 50,
      require: true,
    },
    direccionEmpresa: {
      type: String,
      max: 50,
      require: true,
    },
    RNC: {
      type: String,
      max: 15,
      require: true,
    },
    telefonoEmpresa: {
      type: String,
      max: 15,
      require: true,
    },
    correoEmpresa: {
      type: String,
      max: 50,
      require: true,
    },
    fax: {
      type: String,
      unique: true,
      max: 25,
      required: true,
    },
    actividad: {
      type: String,
      max: 40,
      required: true,
    },
    sitioweb: {
      type: String,
      max: 40,
    },
    fechafundacion: {
      type: Date,
      required: true,
    },
    paisfundacion: {
      type: String,
      required: true,
      max: 20,
    },
    ingresosanuales: {
      type: Schema.Types.Decimal128,
      required: true,
    },
    totalactivos: {
      type: Schema.Types.Decimal128,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("cliente", ClienteSchema);
