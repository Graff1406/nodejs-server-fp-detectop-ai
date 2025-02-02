import cors from 'cors';

// export const corsMiddleware = cors({
//   origin: (origin, callback) => {
//     const allowedOrigins = process.env.ALLOWED_ORIGINS
//       ? process.env.ALLOWED_ORIGINS.split(',')
//       : ['http://localhost:3000'];

//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
// });

export const corsMiddleware = cors({
  origin: '*',
});
