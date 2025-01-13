const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /healthz:
 *   get:
 *     tags: [Kubernetes]
 *     summary: Health check endpoint
 *     responses:
 *       200:
 *         description: Returns the health status of the service
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/healthz', (req, res) => {
    res.status(200).send('OK');
});

/**
 * @swagger
 * /readiness:
 *   get:
 *     tags: [Kubernetes]
 *     summary: Readiness check endpoint
 *     responses:
 *       200:
 *         description: Returns the readiness status of the service
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/readiness', (req, res) => {
    res.status(200).send('OK');
});

/**
 * @swagger
 * /startup:
 *   get:
 *     tags: [Kubernetes]
 *     summary: Startup check endpoint
 *     responses:
 *       200:
 *         description: Returns the startup status of the service
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/startup', (req, res) => {
    res.status(200).send('OK');
});

module.exports = router;