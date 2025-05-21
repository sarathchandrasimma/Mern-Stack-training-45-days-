// Imports
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./Routes/userRoutes');
const cors=require('cors')

// Initialize App
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/AITAM', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Built-in Middleware to parse JSON
app.use(express.json());
app.use(cors(
    // {
    //     // origin:"http://localhost:5173"
    // }
))
// Route Middleware
app.use('/api/users', userRoutes);

// Start Server
app.listen(8080, () => {
    console.log("🚀 Server is running on http://localhost:8080");
});
