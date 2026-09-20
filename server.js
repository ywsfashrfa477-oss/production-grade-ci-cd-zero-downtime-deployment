const express = require('express');
const path = require('node:path');

const app = express();
const port = process.env.PORT || 3000;
const version = process.env.APP_VERSION || '1.0.0';

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/health', (_request, response) => {
  response.json({
    status: 'ok',
    service: 'release-dashboard',
    version,
    timestamp: new Date().toISOString()
  });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Release Dashboard is running on port ${port}`);
  });
}

module.exports = app;