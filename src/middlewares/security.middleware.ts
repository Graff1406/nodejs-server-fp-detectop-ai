import helmet from 'helmet';
import { RequestHandler } from 'express';

export const securityMiddleware: RequestHandler[] = [helmet()];
