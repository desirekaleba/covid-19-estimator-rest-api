import winston from 'winston';
import morgan from 'morgan';

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    winston.format.printf((info) => `${info.message}`)
  ),
  transports: [
    new winston.transports.File({
      filename: './logs.log',
      json: false
    })
  ]
});

logger.stream = {
  write: (message) => logger.info(message.slice(0, message.length - 1))
};
const appendLogger = morgan(
  ':method    :url    :status     :response-time ms',
  { stream: logger.stream }
);

export default appendLogger;
