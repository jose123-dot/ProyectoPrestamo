import { model, Schema, Types } from "mongoose";

const SolicitudPersonaSchema = new Schema(
  {
    usuario: {
      type: Types.ObjectId,
      ref: "user",
      required: true,
    },
    fecha: {
      type: Date,
      required: true,
      default: Date.now,
    },
    monto: {
      type: Number,
    },
    estatus: {
      type: String,
      default: "pendiente",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("solicitudpersona", SolicitudPersonaSchema);
