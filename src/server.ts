import express from "express";

const app = express();

app.listen(3334, () => {
  console.log("HTTP server running")
})