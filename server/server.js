import express from 'express';
import path from 'path';
import cors from 'cors'
import mongoose from 'mongoose';

import { fileURLToPath } from 'url';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import notfound from './middleware/notfound.js';
import errorHandler from './middleware/error.js';
const port = process.env.PORT || 8000;
const pswd = process.env.MONGO_URI;

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Body parser middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middleware
app.use(logger);

// Middleware to serve React build files
//app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/posts', posts);


// Error handler
app.use(notfound);
app.use(errorHandler);

//app.listen(port, () => console.log(`Server is running on port: ${port}`));

//connect throgh mongoose
mongoose
    .connect(
        //"mongodb+srv://flexicraftcon:wojo1234%40@cluster0.pw5ci.mongodb.net/Project-0?retryWrites=true&w=majority&appName=Cluster0"
        `mongodb+srv://flexicraftcon:${pswd}@cluster0.pw5ci.mongodb.net/Project-0?retryWrites=true&w=majority&appName=Cluster0`
    )
    .then(() => {
        console.log("Connected to database!");
        app.listen(port, () => {
          console.log(`Server is running on port: ${port}`);
        });
    })
    .catch(() => {
        console.log("Connection failed!");
    });