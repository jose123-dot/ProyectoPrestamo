import {model, schema} from "mongoose";

const MetodoPagoSchema = new schema ({
idmetodopago : {
    type : Number,
    required : true,
    unique : true,
},

tipo : {
    type : schema.types.ObjectId,
    ref : tipo,
},

estatus : {
    type : String,
    require : true,
    max : 20,
},

});

export default model ("metodopago", MetodoPagoSchema);