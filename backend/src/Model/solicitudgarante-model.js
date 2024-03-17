import { model, Schema } from "mongoose";

const SolicitudGaranteSchema = new Schema(
  {
    nombre: {
      type: String,
      max: 40,
      required: true,
    },
    apellido: {
      type: String,
      max: 40,
      required: true,
    },
    apodo: {
      type: String,
      max: 30,
    },
    nacionalidad: {
      type: String,
      max: 30,
      required: true,
    },
    sexo: {
      type: String,
      max: 20,
      required: true,
    },
    tipodocumento: {
      type: String,
      max: 20,
      required: true,
    },
    documento: {
      type: String,
      max: 30,
      required: true,
      unique: true,
    },
    ocupacion: {
      type: String,
      max: 40,
      required: true,
    },
    telefonoresidencial: {
      type: String,
      max: 20,
    },
    celular: {
      type: String,
      max: 20,
      required: true,
    },
    correo: {
      type: String,
      max: 50,
      unique: true,
    },
    direccion: {
      type: String,
      max: 30,
      required: true,
    },
    noedificio: {
      type: String,
      max: 15
    },
    nocasa: {
      type: String,
      max: 15,
    },
    sector: {
      type: String,
      max: 30
    },
    municipio: {
      type: String,
      max: 30,
      required: true,
    },
    provincia: {
      type: String,
      max: 30,
      required: true,
    },
    direccionfamiliar: {
      type: String,
      max: 70,
    },
    trabajaactualmente: {
      type: Boolean,
      required: true,
    },
    nombrelugartrabajo: {
      type: String,
      max: 50,
    },
    cargotrabajo: {
      type: String,
      max: 40,
    },
    direcciontrabajo: {
      type: String,
      max: 70,
    },
    ingresoprincipal: {
      type: Schema.Types.Decimal128,
      required: true,
    },
    poseeotrosingresos: {
      type: Boolean,
      required: true,
    },
    otrosingresos: {
      type: Schema.Types.Decimal128,
    },
    poseeinmueble: {
      type: Boolean,
      required: true,
    },
    tipoinmueble: {
      type: [String],
    },
    valorinmueble: {
      type: [Schema.Types.Decimal128],
    },
    poseevehiculo: {
      type: Boolean,
      required: true,
    },
    tipovehiculo: {
      type: [String],
    },
    valorvehiculo: {
      type: [Schema.Types.Decimal128],
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model("solicitudgarante", SolicitudGaranteSchema);