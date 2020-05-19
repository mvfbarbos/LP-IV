const Todo = require("./todo"); //registro do metodo Schema

Todo.methods(["get", "post", "put", "delete"]); //registrando requisicoes

Todo.updateOptions({runValidators: true});


module.exports = Todo;