import cors from 'cors';
import { getAllowedOrigins } from '../utils/allowedOrigins.utils';

export const corsMiddleware = cors({
  origin: (origin, callback) => {
    const allowedOrigins = getAllowedOrigins();
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
});
