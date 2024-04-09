const { Schema } = mongoose;

const ContratoSchema = new Schema({
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "idusuario",
  },

  revisionsolicitud: {
    type: Schema.Types.ObjectId,
    ref: "idrevisionsolicitud",
  },

  metodopago: {
    type: Schema.Types.ObjectId,
    ref: "idmetodopago",
  },

  monto: {
    type: Schema.Types.Decimal128,
    required: true,
  },

  tasanumberes: {
    type: Schema.Types.Decimal128,
    required: true,
  },

  fechainicio: {
    type: Date,
    required: true,
  },

  duracionmeses: {
    type: Number,
    required: true,
  },

  diapago: {
    type: Date,
    required: true,
  },
});

export default mongoose.model("contrato", ContratoSchema);
