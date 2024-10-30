import { Schema, SchemaType, model} from "mongoose"

const entradaSchema = new Schema ({
   local :  {
     type : Schema.Types.String,
     required : true,
    },
    horario: {
        type : Schema.Types.String,
        required : true
    }
})

const saidaSchema = new Schema ({
    local : {
        type : Schema.Types.String,
        required : true
    },
    horario : {
        type : Schema.Types.String,
        required: true
    }
})

const statusSchema = new Schema ({
    status : {
        type : Schema.Types.String,
        required : true
    }
})