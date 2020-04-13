import express from 'express';
import cors from 'cors';
import estimatorRouter from './routes/estimator';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use('/api/v1/on-covid-19/', estimatorRouter);

app.get('/', (req, res) => {
  res.status(200).send(`Welcome to covid19 REST api, 
    you can POST json data and i will respond
    with covid19 data estimation either in json format if you hit /api/v1/on-covid-19/json or xml if /xml`);
});

export default app;
