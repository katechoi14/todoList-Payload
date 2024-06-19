import express from 'express';
import payload from 'payload';

require('dotenv').config();

const app = express();

payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: app,
});

app.listen(3001, () => {
  console.log('Payload CMS server is running on http://localhost:3001');
});
