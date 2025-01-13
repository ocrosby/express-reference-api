const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /:
 *  get:
 *    tags: [Items]
 *    summary: Returns all items
 *    responses:
 *      200:
 *        description: A list of items
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 */
router.get('/', (req, res) => {
    res.status(200).send('GET items');
});

module.exports = router;