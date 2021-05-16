import express from 'express';
import cors from 'cors';

import db from './db';
import surlRouter from './routes/surl-router';

const app = express();
const apiPort = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api', surlRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
