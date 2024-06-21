import express from 'express';
import emailRoutes from './routes/emailRoutes.js';
import authRoutes from './routes/authRoutes.js';
import logMiddleware from './middlewares/logMiddleware.js';
import corsMiddleware from './middlewares/corsMiddleware.js';
import rateLimitMiddleware from './middlewares/rateLimitMiddleware.js';
import authMiddleware from './middlewares/authMiddleware.js';

const app = express();

const PORT = 3001;

app.use(corsMiddleware);
app.use(logMiddleware);
app.use(authMiddleware);
app.use(rateLimitMiddleware);

app.use(express.json());

app.use('/email', emailRoutes)
app.use("/auth", authRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

export default app;


