const express = require('express');
const fs = require('fs');
const app = express();
const service = require('./recommendation_service');
app.use(express.json());

const PORT = 3005;

// Read and parse JSON data from a file
const readData = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));

// Return item recommendations for a given user
app.get('/recommendations/:userId', (req, res) => {
    try {
        const results = service.getRecommendations(parseInt(req.params.userId));
        res.json(results);
    } catch (err) {
        const status = err.message === 'NOT_FOUND' ? 404 : 500;
        res.status(status).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Personalized Feed Service running on port ${PORT}`);
});