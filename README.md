# Production-grade CI/CD zero-downtime deployment

Production-oriented CI/CD with GitHub Actions, Docker, AWS EC2, Nginx, blue-green deployment, and automated rollback.

## Web app

The first version is a small Express-powered release dashboard. It shows the current release, service availability, and a live health check against `/api/health`.

### Run locally

```bash
npm install
npm start
```

Open <http://localhost:3000> in a browser.

The app supports these environment variables:

- `PORT`: HTTP port, defaults to `3000`
- `APP_VERSION`: release version shown by the dashboard, defaults to `1.0.0`
