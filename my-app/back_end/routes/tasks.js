const router = require('express').Router();
let Tasks = require('../model/tasks.model');

router.route('/').get((req, res) => {
  Tasks.find()
    .then(task => res.json(task))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const taskName = req.body.taskName;
  const dueTime = req.body.dueTime;
  const timeNeed = req.body.timeNeed;

  const newTask = new Tasks({taskName,dueTime,timeNeed});

  newTask.save()
    .then(() => res.json('Task added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;