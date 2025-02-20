const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

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


const Driver = mongoose.model('Driver');
const Rider = mongoose.model('Rider');
const Trip = mongoose.model('Trip');

// Get all drivers
app.get('/drivers', async (req, res) => {
    try {
        const drivers = await Driver.find();
        res.json({ drivers });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching drivers' });
    }
});

// Get all clients (customers)
app.get('/clients', async (req, res) => {
    try {
        const clients = await Rider.find();
        res.json({ clients });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching clients' });
    }
});

// Get a specific trip by ID with aggregated driver and customer data
app.get('/trips/:id', async (req, res) => {
    try {
        const tripId = req.params.id;

        const trip = await Trip.aggregate([
            {
                $match: { _id: ObjectId(tripId) } // Match the trip by ID
            },
            {
                $lookup: {
                    from: 'drivers', // Join with drivers collection
                    localField: 'driver',
                    foreignField: '_id',
                    as: 'driverDetails'
                }
            },
            {
                $lookup: {
                    from: 'riders', // Join with riders collection
                    localField: 'customer',
                    foreignField: '_id',
                    as: 'customerDetails'
                }
            },
            {
                $unwind: '$driverDetails' // Flatten the driverDetails array
            },
            {
                $unwind: '$customerDetails' // Flatten the customerDetails array
            }
        ]);

        if (trip.length === 0) {
            return res.status(404).json({ error: 'Trip not found' });
        }

        res.json({ trip: trip[0] });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching trip' });
    }
});

// Get all trips with aggregated driver and customer data
app.get('/trips', async (req, res) => {
    try {
        const trips = await Trip.aggregate([
            {
                $lookup: {
                    from: 'drivers', // Join with drivers collection
                    localField: 'driver',
                    foreignField: '_id',
                    as: 'driverDetails'
                }
            },
            {
                $lookup: {
                    from: 'riders', // Join with riders collection
                    localField: 'customer',
                    foreignField: '_id',
                    as: 'customerDetails'
                }
            },
            {
                $unwind: '$driverDetails' // Flatten the driverDetails array
            },
            {
                $unwind: '$customerDetails' // Flatten the customerDetails array
            }
        ]);

        res.json({ trips });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching trips' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
