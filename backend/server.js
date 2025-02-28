// // const express = require('express');
// // const fs = require('fs');
// // const path = require('path');
// // const app = express();
// // const port = 8081;

// // // Middleware to parse JSON bodies
// // app.use(express.json());

// // // Serve static files (your Cesium app)
// // app.use(express.static(path.join(__dirname, '../test-v1')));

// // // Enable CORS
// // app.use((req, res, next) => {
// //     res.header('Access-Control-Allow-Origin', '*');
// //     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
// //     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
// //     if (req.method === 'OPTIONS') {
// //         return res.sendStatus(200);
// //     }
// //     next();
// // });

// // const filePath = path.resolve(__dirname, '../test-v1/data-test.geojson');
// // // Endpoint to handle POST requests for saving GeoJSON data
// // // app.post('/save-geojson', (req, res) => {
// // //     const geojsonData = req.body;

// // //     // Correct path to the GeoJSON file


// // //     // Save the updated GeoJSON data to the file
// // //     fs.writeFile(filePath, JSON.stringify(geojsonData, null, 2), (err) => {
// // //         if (err) {
// // //             console.error('Error saving GeoJSON file:', err);
// // //             return res.status(500).send('Failed to save GeoJSON data.');
// // //         }

// // //         console.log('GeoJSON data saved successfully.');
// // //         res.status(200).send('GeoJSON data saved successfully.');
// // //     });
// // // });
// // app.post('/save-geojson', (req, res) => {
// //     const geojsonData = JSON.stringify(req.body, null, 2);
// //     fs.writeFile(filePath, geojsonData, (err) => {
// //         if (err) {
// //             console.error("Error writing GeoJSON file:", err);
// //             return res.status(500).json({ error: "Failed to save GeoJSON" });
// //         }
// //         console.log("GeoJSON data saved successfully.");
// //         res.json({ message: "GeoJSON data saved successfully" });
// //     });
// // });


// // // Start the server
// // app.listen(port, () => {
// //     console.log(`Server running at http://localhost:${port}`);
// // });


// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const app = express();
// const port = 8081;

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Serve static files (your Cesium app)
// app.use(express.static(path.join(__dirname, '../')));

// // Enable CORS
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     if (req.method === 'OPTIONS') {
//         return res.sendStatus(200);
//     }
//     next();
// });

// // Path to the GeoJSON file
// const filePath = path.resolve(__dirname, '../data-test.geojson');

// // Ensure the GeoJSON file exists
// if (!fs.existsSync(filePath)) {
//     fs.writeFileSync(filePath, JSON.stringify({ type: "FeatureCollection", features: [] }, null, 2));
// }

// // Endpoint to handle POST requests for saving GeoJSON data
// app.post('/save-geojson', (req, res) => {
//     const geojsonData = req.body;

//     // Save the updated GeoJSON data to the file
//     fs.writeFile(filePath, JSON.stringify(geojsonData, null, 2), (err) => {
//         if (err) {
//             console.error("Error writing GeoJSON file:", err);
//             return res.status(500).json({ error: "Failed to save GeoJSON" });
//         }
//         console.log("GeoJSON data saved successfully.");
//         res.json({ message: "GeoJSON data saved successfully" });
//     });
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });


// 28-02-2024----------------------------------------------------------------------------------

// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const cors = require('cors');

// const app = express();
// const port = 8081;

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Enable CORS
// app.use(cors());

// // Serve the HTML file
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../test-v1/test4.html'));
// });

// // Endpoint to handle GeoJSON updates
// app.post('/data-test.geojson', (req, res) => {
//     const updatedGeoJson = req.body; // Get the updated GeoJSON data

//     const geoJsonFilePath = path.join(__dirname, '../Downloads/tile/data-test.geojson');

//     // Write the updated GeoJSON to the file
//     fs.writeFileSync(geoJsonFilePath, JSON.stringify(updatedGeoJson, null, 2), 'utf8');

//     res.status(200).send('GeoJSON file updated successfully');
// });


// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const cors = require('cors');

// const app = express();
// const port = 8081;

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Enable CORS
// app.use(cors());

// // Serve the HTML file
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../test-v1/test4.html'));
// });

// // Endpoint to handle GeoJSON updates
// app.post('/data-test.geojson', (req, res) => {
//     const updatedGeoJson = req.body; // Get the updated GeoJSON data

//     // Define the path to save the GeoJSON file
//     const geoJsonFilePath = path.join(__dirname, '../Downloads/tile/data-test.geojson');

//     // Write the updated GeoJSON to the file
//     fs.writeFileSync(geoJsonFilePath, JSON.stringify(updatedGeoJson, null, 2), 'utf8');

//     // Respond to the client
//     res.status(200).send('GeoJSON file updated successfully');
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });


// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// const PORT = 8081;

// // Middleware to parse JSON requests
// app.use(bodyParser.json());

// // Path to the GeoJSON file
// const geoJsonFilePath = 'C:\\Users\\yaswanth\\Downloads\\tile\\data-test.geojson';

// // Endpoint to serve the GeoJSON file
// app.get('/data-test.geojson', (req, res) => {
//     fs.readFile(geoJsonFilePath, 'utf8', (err, data) => {
//         if (err) {
//             console.error('Error reading GeoJSON file:', err);
//             return res.status(500).send('Error reading GeoJSON file');
//         }
//         res.setHeader('Content-Type', 'application/json');
//         res.send(data);
//     });
// });

// // Endpoint to update the GeoJSON file with new anchor points
// app.post('/update-geojson', (req, res) => {
//     const updatedGeoJson = req.body;

//     // Validate the incoming data
//     if (!updatedGeoJson || !Array.isArray(updatedGeoJson.features)) {
//         return res.status(400).send('Invalid GeoJSON data');
//     }

//     // Write the updated GeoJSON data to the file
//     fs.writeFile(geoJsonFilePath, JSON.stringify(updatedGeoJson, null, 2), 'utf8', (err) => {
//         if (err) {
//             console.error('Error writing to GeoJSON file:', err);
//             return res.status(500).send('Error updating GeoJSON file');
//         }
//         console.log('GeoJSON file updated successfully');
//         res.send('GeoJSON file updated successfully');
//     });
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Import the cors package

const app = express();
const PORT = 8081;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors({
    origin: 'http://127.0.0.1:8000', // Allow requests from this origin
    methods: ['GET', 'POST'],       // Allow these HTTP methods
    allowedHeaders: ['Content-Type'] // Allow this header
}));

// Path to the GeoJSON file
const geoJsonFilePath = 'C:\\Users\\yaswanth\\Downloads\\tile\\data-test.geojson';

// Endpoint to serve the GeoJSON file
app.get('/data-test.geojson', (req, res) => {
    fs.readFile(geoJsonFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading GeoJSON file:', err);
            return res.status(500).send('Error reading GeoJSON file');
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    });
});

// Endpoint to update the GeoJSON file with new anchor points
app.post('/update-geojson', (req, res) => {
    const updatedGeoJson = req.body;

    // Validate the incoming data
    if (!updatedGeoJson || !Array.isArray(updatedGeoJson.features)) {
        return res.status(400).send('Invalid GeoJSON data');
    }

    // Write the updated GeoJSON data to the file
    fs.writeFile(geoJsonFilePath, JSON.stringify(updatedGeoJson, null, 2), 'utf8', (err) => {
        if (err) {
            console.error('Error writing to GeoJSON file:', err);
            return res.status(500).send('Error updating GeoJSON file');
        }
        console.log('GeoJSON file updated successfully');
        res.send('GeoJSON file updated successfully');
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});