import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import Taskrouter from './routes/Task.route.js';

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
}));

// routes

app.use('/api/task', Taskrouter)

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});