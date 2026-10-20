import express from "express";
import { getBook } from "../controller/book.controller.js"; 
//Route decide karta hai ki kaunsa function execute hoga, jabki controller actual request-handling logic rakhta hai.

const router = express.Router();

router.get("/", getBook);

export default router;

//flowchart TD
  //  A[Frontend sends GET /book] --> B[Express Server]
  //  B --> C[app.use /book]
  //  C --> D[book.route.js]
  //  D --> E[router.get /]
  //  E --> F[getBook Controller]
  //  F --> G[Send Response to Frontend]
