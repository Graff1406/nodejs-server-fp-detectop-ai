import cors from 'cors';

export const corsMiddleware = cors({
  origin: (origin, callback) => {
    const allowedOrigins = [
      'chrome-extension://ckjhomfldidmibjjfjhenfcffbjjkhoc',
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
});
