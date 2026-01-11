// server.ts

import * as dotenv from 'dotenv';
const express=require('express');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Access the PORT variable, providing a default (e.g., 5000) if it's not set in .env
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
