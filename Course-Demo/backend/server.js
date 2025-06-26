const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./config/db');
const PORT = 8080;
const courseRoutes = require('./routes/courseRoutes')

app.use(cors());
app.use(express.json())

connectDB();

app.use('/api', courseRoutes);




app.listen(PORT , (req,res)=>{
    console.log(`server is running on port ${PORT}`);
    
})