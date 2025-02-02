import dotenv from 'dotenv';
import path from 'path';
import { getAllowedOrigins } from '../utils/allowedOrigins.utils';

dotenv.config();

export const config = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  PUBLIC_DIR: path.join(__dirname, '..', '..', 'public'),
  allowedOrigins: getAllowedOrigins(),
};
