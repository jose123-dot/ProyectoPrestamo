import { Schema, model} from "mongoose";

const RevisionSchema = new Schema(
  {
    estatusaprobacion: {
      type: String,
      require: true,
      max: 20,
    },
    usuario: {
      type: [
        {
          ref: "user",
          type: Schema.ObjectId,
        }
      ]
    } 
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model("revision", RevisionSchema);