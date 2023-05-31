const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { MongoClient } = require("mongodb");

const app = express();
app.use(express.json());
app.use(cors());

// Do I need to add mongodb this way? see Job in IT notes
// const connectionStringURI = 'mongodb://localhost:27017';
mongoose.connect("mongodb://127.0.0.1:27017/set-rep", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => console.log("Connected to DB"))
.catch(console.error);

app.listen(3001, () => console.log("Server started on port 3001"));