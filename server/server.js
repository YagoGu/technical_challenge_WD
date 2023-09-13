const app = require("./app");
const cors = require("cors");
const port = 5005;

// const frontendURL = "http://localhost:5173";

app.use(cors({
    origin: '*',
  }));

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});