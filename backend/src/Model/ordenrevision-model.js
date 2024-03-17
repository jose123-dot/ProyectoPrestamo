import { Schema, model } from "mongoose";

const OrdenRevisionSchema = new Schema(
  {
    estatus: {
      type: String,
      required: true,
      max: 20,
    },
    solicitudpersona: {
      type: 
        {
          ref: "solicitudpersona",
          type: Schema.ObjectId,
        }
      
    },
    solicitudempresa: {
      type: 
        {
          ref: "solicitudempresa",
          type: Schema.ObjectId,
        }
      
    },
    usuario: {
      type: 
        {
          ref: "user",
          type: Schema.ObjectId,
        }
      
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model("ordenrevision", OrdenRevisionSchema);