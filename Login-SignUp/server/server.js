const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoute = require('./router/authRoute.js');

// Load environment variables
dotenv.config();

const app = express();
const connectDB = require('./config/db.js');

app.use(cors());
app.use(express.json());

app.use("/api", authRoute);

connectDB();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});