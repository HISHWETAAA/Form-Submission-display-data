const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/formData')
.then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// Create a schema
const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const FormData = mongoose.model('FormData', formSchema);

// POST route to submit form data
app.post('/submit', async (req, res) => {
    try {
        const formData = new FormData(req.body);
        await formData.save();
        res.status(201).send(formData);
    } catch (error) {
        res.status(400).send(error);
    }
});

// GET route to retrieve form data
app.get('/data', async (req, res) => {
    try {
        const data = await FormData.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
