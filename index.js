import bodyParser from "body-parser";
import express from "express";

const app = express();
app.use(bodyParser.json);

//database connetion

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
