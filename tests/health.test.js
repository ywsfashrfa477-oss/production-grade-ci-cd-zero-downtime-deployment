const test = require('node:test');
const assert = require('node:assert/strict');
const app = require('../server');

test('GET /api/health returns a healthy service response', async () => {
  const server = app.listen(0);
  const { port } = server.address();

  try {
    const response = await fetch(`http://127.0.0.1:${port}/api/health`);
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.equal(body.status, 'ok');
    assert.equal(body.service, 'release-dashboard');
    assert.equal(body.version, '1.0.0');
    assert.ok(body.timestamp);
  } finally {
    await new Promise((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
    });
  }
});