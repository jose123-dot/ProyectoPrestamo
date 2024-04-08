import { model, Schema, Types } from "mongoose";

const SolicitudEmpresaSchema = new Schema(
  {
    usuario: {
      type: Types.ObjectId,
      ref: "user-Client",
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

    tasainteres: {
      type: Types.Decimal128,
      required: true,
    },
    duracionMeses: {
      type: Number,
      required: true,
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

export default model("solicitudempresa", SolicitudEmpresaSchema);
