const router = require('express').Router();
let SelectDay = require('../model/selectDay.model');

router.route('/').get((req, res) => {
  Tasks.find()
    .then(task => res.json(task))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const cramDay = req.body.cramDay;

  const newTask = new SelectDay({cramDay});

  newTask.save()
    .then(() => res.json('cram day added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;