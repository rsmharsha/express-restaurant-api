import rateLimit from "express-rate-limit";

export const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // for every 15 minutes
    max: 100,                // 100 requests per IP
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        error: "Too many requests. Chill for a bit."
    }
});