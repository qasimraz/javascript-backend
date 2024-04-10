const request = require('supertest');
const app = require('./app.js');


describe('GET /json', () => {

    it('should return status 200', async () => {
        const res = await request(app).get('/json');
        expect(res.statusCode).toEqual(200);
    });

    it('should return JSON content type', async () => {
        const res = await request(app).get('/json');
        expect(res.type).toEqual('application/json');
    });

    it('should return valid JSON', async () => {
        const res = await request(app).get('/json');
        expect(res.body).toEqual(expect.any(Object));
    });

    it('should return 404 for invalid path', async () => {
        const res = await request(app).get('/invalid');
        expect(res.statusCode).toEqual(404);
    });

});
