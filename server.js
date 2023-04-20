const express = require('express');
// const authRoutes = require('./routes/auth');
const bookingRoutes = require('./routes/booking');
const db = require('./db');
const patientsRouter = require('./routes/patients');
const bodyParser = require('body-parser');
const newsRouter = require('./routes/news');





const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use('/api/auth', authRoutes);
app.use('/booking', bookingRoutes);
app.use('/patients', patientsRouter);

app.use('/news/post', newsRouter);





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
