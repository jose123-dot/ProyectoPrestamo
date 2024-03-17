import mongoose, { Schema, model} from "mongoose";

const RevisionSchema = new Schema(
  {
    estatusaprobacion: {
      type: String,
      required: true,
      max: 20,
    },
    usuario: {
      type: 
        {
          ref: "user",
          type: Schema.ObjectId,
        }
      
    },
    fecha:{
      type: Date,
      required: true
    },
   
  },
 
  {
    timestamps: true,
    versionKey: false
  }
);

export default model("revision", RevisionSchema);