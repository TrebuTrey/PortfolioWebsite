const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/logo/:domain', async (req, res) => {
  const { domain } = req.params;

  try {
    const response = await fetch(`https://api.brandfetch.io/v2/brands/${domain}`, {
      headers: {
        Authorization: `Bearer ${process.env.BRANDFETCH_API_KEY}`,
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch logo' });
    }

    const data = await response.json();

    let logoUrl = null;
    if (data.logos && data.logos.length > 0) {
      const svgDark = data.logos.find(logo => logo.type === 'svg' && logo.theme === 'dark');
      const svgLight = data.logos.find(logo => logo.type === 'svg' && logo.theme === 'light');
      const anyLogo = data.logos[0];
      logoUrl = (svgDark || svgLight || anyLogo).url;
    }

    res.json({ logoUrl });
  } catch (error) {
    console.error('Error fetching logo:', error);
    res.status(500).json({ error: 'Server error fetching logo' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
