import { Schema, model } from "mongoose";

const RevisionSchema = new Schema(
  {
    estatusaprobacion: {
      type: String,
      required: true,
      max: 20,
      default: "pendiente",
    },
    usuario: {
      type: {
        ref: "User-admin",
        type: Schema.ObjectId,
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("revision", RevisionSchema);
