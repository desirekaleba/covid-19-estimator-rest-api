import express from 'express';
import cors from 'cors';
import estimatorRouter from './routes/estimator';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/on-covid-19/', estimatorRouter);

app.get('/', (req, res) => {
  res.status(200).send(`Welcome to covid19 REST api, 
    you can POST json data and i will respond 
    with either json or xml if you hits /api/v1/on-covid-19/json`);
});


export default app;
