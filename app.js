import express from 'express';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import cors from 'cors';
import auth_route from './routes/auth.route.js';

config({
	path: './config.env'
});

const app = express();
app.use(cors({
	origin: [process.env.FRONTEND_URL, process.env.LOCAL_HOST],
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
	credentials: true
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', auth_route);
export default app;