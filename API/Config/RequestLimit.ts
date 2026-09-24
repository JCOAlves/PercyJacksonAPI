import dotenv from "dotenv";
import { rateLimit } from 'express-rate-limit';

dotenv.config();

const configLimit = {
    windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 10 * 60 * 1000, 
    max: Number(process.env.RATE_LIMIT_MAX) || 200, 
    standardHeaders: 'draft-8' as const, 
    legacyHeaders: false,
    message: 'Many requests have been made from this IP address. Please try again in 10 minutes.',
};

const ReqLimit = rateLimit(configLimit);

export default ReqLimit;