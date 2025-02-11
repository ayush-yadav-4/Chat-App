import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// API routes
app.use('/api/user', userRoutes);
// ... other API routes

// Serve static files from the Frontend/dist directory
app.use(express.static(path.join(__dirname, 'Frontend', 'dist')));

// Handle all other routes by serving the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'Frontend', 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 