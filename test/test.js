var request = require('supertest');
var app = require('../index.js');
const { describe } = require('node:test');

describe('GET /', function() {
    it('respond with Hello World!', function(done) {
        request(app)
            .get('/')
            .expect(200)
            .expect('Hello World!', done);
    });
});

describe('GET /about', function() {
    it('respond with About Us', function(done) {
        request(app)
            .get('/about')
            .expect(200)
            .expect('About Us', done);
    });
});

describe('GET /status', function() {
    it('respond with Status: OK', function(done) {
        request(app)
            .get('/status')
            .expect(200)
            .expect('Status: OK', done);
    });
});