const express = require("express");
const app = express();

// Listen on PORT
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`We are running on port: ${PORT}`));
