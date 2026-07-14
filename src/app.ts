import express, { Application } from 'express';
import redisClient from 'redis';

const app: Application = express();

app.use(express.json())

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: "ussd health is running fine" });
});

export default app;
