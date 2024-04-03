import { Schema, model } from "mongoose";

const EmpresaSchema = new Schema(
  {
    usuario: {
      type: [
        {
          ref: "user",
          type: Schema.ObjectId,
        }
      ]
    },
    nombre: {
      type: String,
      max: 50,
      require: true,
    },
    ubicacion: {
      type: String,
      max: 50,
      require: true,
    },
    direccion: {
      type: String,
      max: 50,
      require: true,
    },
    rnc: {
      type: String,
      max: 15,
      require: true,
    },
    telefono: {
      type: String,
      max: 15,
      require: true,
    },
    correo: {
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
      max: 40
    },
    fechafundacion: {
      type: Date,
      required: true
    },
    paisfundacion: {
      type: String,
      required: true,
      max: 20
    },
    ingresosanuales:  {
      type: Schema.Types.Decimal128,
      required: true,
    },
    totalactivos:{
      type: Schema.Types.Decimal128,
      required: true,   
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model("empresa", EmpresaSchema);