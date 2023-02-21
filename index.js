// REQUIRED IMPORTS

const express = require ("express");
const router = express.Router();
const noteRouter =require("./notes.js")

// MODULAR ROUTERS

router.use("/notes", notesRouter);

// EXPORT

//ExPORT ROUTER TO SERVER.js
module.exports = router;