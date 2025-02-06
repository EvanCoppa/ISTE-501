const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mern-stack-db', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
    console.log('Connected to MongoDB');
    const collections = await mongoose.connection.db.listCollections().toArray();
        const collectionNames = collections.map(col => col.name);
        console.log("All collections: ");
        console.log(collectionNames);
});

// Route to list all collections
app.get('/collections', async (req, res) => {
    try {
        const collections = await mongoose.connection.db.listCollections().toArray();
        const collectionNames = collections.map(col => col.name);
        res.json({ collections: collectionNames });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching collections' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
