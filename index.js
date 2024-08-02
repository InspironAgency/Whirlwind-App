import { ChemicalServer } from "chemicaljs";
import express from "express";
import compression from "compression";


const chemical = new ChemicalServer();
const port = process.env.PORT || 8080;

chemical.use(compression());

chemical.use(
  express.static("public", {
    index: "index.html",
    extensions: ["html"],
  })
);

chemical.error((req, res) => {
  res.status(404);
  res.send("404 Error");
});

chemical.listen(port, () => {
  console.log(`Whirlwind listening on port ${port}`);
});