const express = require('express');
const aiController = require("../controllers/ai.controller");
const auth = require('../middleware/auth');

const router = express.Router();

// Protected route - requires authentication
router.post("/get-review", aiController.getReview);

module.exports = router;    