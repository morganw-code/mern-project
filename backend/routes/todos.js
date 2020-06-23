const router = require('express').Router();
let Todo = require('../models/todo.model');

router.route('/').get((req, res) => {
  Todo.find()
    .then(todos => res.json(todos))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/new').post((req, res) => {
  const username = req.body.username;
  const title = req.body.title;
  const description = req.body.description;
  const date = req.body.date;
  
  const newTodo = new Todo({
    username,
    title,
    description,
    date
  });

  newTodo.save()
    .then(() => res.json('Todo added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
