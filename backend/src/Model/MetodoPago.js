import { model, Schema } from "mongoose";

const MetodoPagoSchema = new Schema({
  tipo: {
    type: String,
    max: 12,
    required: true,
  },

  estatus: {
    type: String,
    required: true,
    max: 20,
    default: "activo",
  },
});

export default model("metodopago", MetodoPagoSchema);
