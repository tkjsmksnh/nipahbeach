import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

// Melayani file statis langsung dari root directory
app.use(express.static(process.cwd()));

// SPA fallback ke index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'index.html'));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
