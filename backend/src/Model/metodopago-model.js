import {model, Schema} from "mongoose";

const MetodoPagoSchema = new Schema ({
idmetodopago : {
    type : Number,
    required : true,
    unique : true,
},

tipo : {
    type : String,
    max : 12,
    required : true,
},

estatus : {
    type : String,
    require : true,
    max : 20,
},

});

export default model ("metodopago", MetodoPagoSchema);