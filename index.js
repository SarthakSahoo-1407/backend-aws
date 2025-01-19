const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

// Root route
app.get('/api/', (req, res) => {
    res.send('Welcome to the Home Page! Pushed through CI/CD pipeline');
});

// Health route
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'UP', message: 'Server is healthy' });
});

// Welcome route
app.get('/api/welcome', (req, res) => {
    res.send('Welcome to the Welcome Page!');
});

// Another route (example: /about)
app.get('/api/about  ', (req, res) => {
    res.send('This is the About Page!');
});

// Catch-all route for undefined endpoints
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
