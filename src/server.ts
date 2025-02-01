import createApp from './app';
import { config } from './config/app.config';

const startServer = () => {
  const app = createApp();

  app.listen(config.PORT, () => {
    console.log(`Server is running on http://localhost:${config.PORT}`);
    console.log(`Environment: ${config.NODE_ENV}`);
  });
};

startServer();
