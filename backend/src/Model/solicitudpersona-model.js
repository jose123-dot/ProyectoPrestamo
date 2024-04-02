import { model, Schema, Types } from "mongoose";

const SolicitudPersonaSchema = new Schema(
  {
    usuario: {
      type: Types.ObjectId,
      ref: "users",
      required: true,
    },
    fecha: {
      type: Date,
      required: true,
    },
    monto: {
      type: Number,
      max: 30,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("solicitudpersona", SolicitudPersonaSchema);
