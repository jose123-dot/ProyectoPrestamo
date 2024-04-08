import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
const UserSchema = new Schema(
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
      required: true,
    },
    otrosingresos: {
      type: Boolean,
      required: true,
    },
    poseeinmueble: {
      type: Boolean,
      required: true,
    },
    valorinmueble: {
      type: Number,
    },
    poseevehiculo: {
      type: Boolean,
      required: true,
    },
    valorvehiculo: {
      type: Number,
    },
    nombreEmpresa: {
      type: String,
      max: 50,
      required: true,
    },
    direccionEmpresa: {
      type: String,
      max: 50,
      required: true,
    },
    RNC: {
      type: String,
      max: 15,
      required: true,
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

    roles: {
      type: [
        {
          ref: "roles",
          type: Schema.ObjectId,
        },
      ],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//encriptar contraseña
UserSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
//compara las password
UserSchema.statics.comparepassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

export default model("user-client", UserSchema);
