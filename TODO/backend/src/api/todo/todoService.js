const Todo = require("./todo"); //registro do metodo Schema

/**
 * @api {get} /tasks List all tasks
 * @apiGroup Tasks
 * @apiSuccess {Object[]} tasks Task's list
 * @apiSuccess {Number} tasks.id Task id
 * @apiSuccess {String} tasks.title Task title
 * @apiSucess {Boolean} tasks.done Task is done?
 * @apiSuccess {Date} tasks.update-at Update's date
 * @apiSuccess {Date} tasks.created.at Register's date
 * @apiSuccessExample {json} Sucess
 *      HTTP/1.1 200 OK
 *  [{
 *      "id":1, 
 *       "title": "Study",
 *       "done": false
 *       "updated_at": "2016-02-10T15:46:51.778Z",
 *       "created_at": "2016-02-10T15:46:51:778Z"   
 *    }]
 * @apiErrorExample {json} List error
 *      HTTP/1.1 500 Internal Server Error 
 */
Todo.methods(["get", "post", "put", "delete"]); //registrando requisicoes
Todo.updateOptions({ runValidators: true });


module.exports = Todo;