import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import serviceRoute from "./Routes/service.js";
import reviewRoute from "./Routes/review.js";
import appointmentRoute from "./Routes/appointment.js";

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Configure CORS
const corsOptions = {
    origin: true
};

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

// Debugging Routes Middleware
app.use((req, res, next) => {
    console.log(`Incoming Request: ${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('API is Working'); 
});

// Database connection
mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB database is connected");
    } catch (err) {
        console.error("MongoDB database connection failed:", err);
    }
};

// Routes
app.use('/api/v1/auth', authRoute); // domain/api/v1/auth/register
app.use('/api/v1/users', userRoute);
app.use('/api/v1/services', serviceRoute);
app.use('/api/v1/reviews', reviewRoute);
app.use('/api/v1/appointments', appointmentRoute);

app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`); 
});
