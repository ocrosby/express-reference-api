const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Home endpoint
 *     responses:
 *       200:
 *         description: Returns the home page
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

module.exports = router;