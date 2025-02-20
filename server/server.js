const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const driversRoutes = require('./routes/driver');
const clientsRoutes = require('./routes/clients');
const tripsRoutes = require('./routes/trip');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/drivekind', { useNewUrlParser: true, useUnifiedTopology: true });

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


app.get('/', (req, res) => {
    res.send('Hello, welcome to DriveKind!');
});

app.use('/driver', driversRoutes);
app.use('/clients', clientsRoutes);
app.use('/trip', tripsRoutes);