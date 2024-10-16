const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const cors = require("cors");


dotenv.config();

const app = express();
app.use(express.json());
//Allow requests from http://localhost:3001
app.use(cors());
app.options("*", cors()); // Pre-flight request handling for all routes

app.use('/api/auth', authRoutes);



mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


console.log("String is ->>>>>>>>>>>>>>>>>>>",process.env.MONGO_URI)