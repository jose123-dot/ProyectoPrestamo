import { model, Schema } from "mongoose";

const SolicitudGaranteSchema = new Schema(
  {
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
      require: true,
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
    correo: {
      type: String,
      max: 50,
      unique: true,
    },
    direccion: {
      type: String,
      max: 30,
      require: true,
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
    trabajaactualmente: {
      type: Boolean,
      require: true,
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
      require: true,
    },
    poseeotrosingresos: {
      type: Boolean,
      require: true,
    },
    otrosingresos: {
      type: Schema.Types.Decimal128,
    },
    poseeinmueble: {
      type: Boolean,
      require: true,
    },
    tipoinmueble: {
      type: [String],
    },
    valorinmueble: {
      type: [Schema.Types.Decimal128],
    },
    poseevehiculo: {
      type: Boolean,
      require: true,
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