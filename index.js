import express from "express";
const app = express();

const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello Word !");
});
app.listen(port, () => {
  console.log(`Eman Server running on port ${port}.`);
});
