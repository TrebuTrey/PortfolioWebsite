const express = require('express');
const fetch = require('node-fetch'); // or native fetch if your Node version supports it
const cors = require('cors');

require('dotenv').config(); // To load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Allow requests from your frontend origin (configure as needed)

const BRANDFETCH_API_URL = 'https://api.brandfetch.io/v2/brands/';

app.get('/api/logo/:domain', async (req, res) => {
  const { domain } = req.params;

  try {
    const response = await fetch(`${BRANDFETCH_API_URL}${domain}`, {
      headers: {
        Authorization: `Bearer ${process.env.BRANDFETCH_API_KEY}`,
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch logo' });
    }

    const data = await response.json();

    // Return just the logo URLs or the whole data depending on your needs
    res.json(data);
  } catch (error) {
    console.error('Error fetching logo:', error);
    res.status(500).json({ error: 'Server error fetching logo' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
