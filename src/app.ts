import express from 'express';
import cors from 'cors';
import { config } from './config/app.config';
import { corsOptions } from './config/cors.config';
import { securityMiddleware } from './middlewares/security.middleware';
import { loggerMiddleware } from './middlewares/logger.middleware';
import { notFoundHandler, errorHandler } from './middlewares/error.middleware';
import { router as apiRouter } from './routes/api.routes';

const createApp = () => {
  const app = express();

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Security
  app.use(...securityMiddleware);
  app.use(cors(corsOptions));

  // Logging
  if (loggerMiddleware) {
    app.use(loggerMiddleware);
  }

  // Static files
  app.use(express.static(config.PUBLIC_DIR));

  // Routes
  app.use('/api', apiRouter);

  // Error handling
  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
};

export default createApp;
