import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
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

export default model("user", UserSchema);
