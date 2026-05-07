const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/search", async (req, res) => {
  const q = req.query.q;

  try {
    const response = await fetch(
      "https://api.deezer.com/search?q=" + encodeURIComponent(q)
    );

    const data = await response.json();
    res.json(data);

  } catch (err) {
    res.status(500).json({ error: "Failed to fetch music" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Backend running on port " + PORT));
