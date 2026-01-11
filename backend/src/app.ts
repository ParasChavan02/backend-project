const express=require('express');
const app = express();
const port = 3000;

// Use express.json() middleware to parse JSON bodies
app.use(express.json());

app.get('/health', (req, res) => {
    // Respond with a status of 200 OK and a simple JSON message
    res.status(200).json({
        status: 'ok',
        uptime: process.uptime(), // Optional: provides server uptime in seconds
        timestamp: Date.now(),
    });
});

// Define a POST route to handle incoming data
app.post('/api/data', (req, res) => {
    // Access the parsed JSON data from req.body
    const receivedData = req.body;
    console.log('Received data:', receivedData);

    // Send a response
    res.json({
        message: 'Data received successfully!',
        data: receivedData
    });
});



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
