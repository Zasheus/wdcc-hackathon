const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const taskRouter = require('./routes/tasks');
const selectDayRouter = require('./routes/selectDay');

app.use('/selectDay', selectDayRouter);
app.use('/tasks', taskRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
