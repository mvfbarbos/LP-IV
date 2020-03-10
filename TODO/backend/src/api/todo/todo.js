const restful = require("node-restful");
const mongoose = restful.mongoose;

const todoSchema = new mongoose.Schema({
    descricao:{type:String, required:true},
    finalizado:{type:Boolean,required:true,default:false},
    criadroEM: {type:Date,default:Date.now}

});

module.exports = restful.model("Todo",todoSchema);