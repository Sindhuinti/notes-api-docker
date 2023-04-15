const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const connectDB = require('./config/db');
const app = express();

const noteRoutes = require('./routes/noteRoutes');
app.use(cors());



dotenv.config();
connectDB();

app.use(express.json());

app.get('/', function(req, res){
res.send("Notes api");
});


app.use("/api/notes",noteRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT,console.log("server running"));