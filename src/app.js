import express from 'express';
import cors from 'cors';
import estimatorRouter from './routes/estimator';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/on-covid-19/', estimatorRouter);


export default app;
