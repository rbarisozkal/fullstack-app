import request from 'supertest';
import { app } from "../server";
import { expect } from '@jest/globals';

describe('Product Routes', () => {
    it('GET /api/products should return all products', async () => {
        const response = await request(app).get('/api/products');
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(9);
    });

    it('GET /api/products/:id should return a product by id->1', async () => {
        const response = await request(app).get('/api/products/1');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            id: 1,
            name: 'Product A',
            description: 'Product A description',
            price: 20,
        });
    });

    it('GET /api/products/:id should return 404 for invalid id->999', async () => {
        const response = await request(app).get('/api/products/999');
        expect(response.status).toBe(404);
        expect(response.body).toEqual({ error: 'Product not found' });
    });

    it('GET /api/products/:id should return 404 error for invalid id->400 ', async () => {
        const response = await request(app).get('/api/products/400');
        expect(response.status).toBe(404);
        expect(response.body).toEqual({ error: 'Product not found' });
    });

    it('GET /api/products/:id test should return 400 error for non-numeric id for example abc as string', async () => {
        const response = await request(app).get('/api/products/abc');
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Invalid product ID' });
    });
});
