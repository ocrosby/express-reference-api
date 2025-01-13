const request = require('supertest');
const express = require('express');

const app = express();
const kubernetesRoutes = require('../src/routes/kubernetes');
const itemsRoutes = require('../src/routes/items');

app.use('/kubernetes', kubernetesRoutes);
app.use('/items', itemsRoutes);

describe('Kubernetes Routes', () => {
    it('should return OK for /healthz', async () => {
        const response = await request(app).get('/kubernetes/healthz');
        expect(response.status).toBe(200);
        expect(response.text).toBe('OK');
    });

    it('should return OK for /readiness', async () => {
        const response = await request(app).get('/kubernetes/readiness');
        expect(response.status).toBe(200);
        expect(response.text).toBe('OK');
    });

    it('should return OK for /startup', async () => {
        const response = await request(app).get('/kubernetes/startup');
        expect(response.status).toBe(200);
        expect(response.text).toBe('OK');
    });
});

describe('Items Routes', () => {
    it('should return a list of items for GET /items', async () => {
        const response = await request(app).get('/items');
        expect(response.status).toBe(200);
        expect(response.text).toBe('GET items');
    });
});
