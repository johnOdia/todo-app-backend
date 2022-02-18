const Todo = require('../models/createTodo');

const createTodo = async (req, res) => {
    try {
        const { id, body } = req.body;
        const todo = new Todo({
            id,
            body
        })
        await todo.save();
        res.status(201).send('Success');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const todoRoutesConfig = (app) => {
    app.post('/create_todo', createTodo);
}

module.exports = todoRoutesConfig;
