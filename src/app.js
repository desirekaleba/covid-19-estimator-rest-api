import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import appendLogger from './logger/logger';
import indexRouter from './routes/index';
import estimatorRouter from './routes/estimator';

const app = express();

app.use(appendLogger);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/api/v1/on-covid-19/', estimatorRouter);


export default app;
