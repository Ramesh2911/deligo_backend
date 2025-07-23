import express from 'express';
import { login, logout } from '../controllers/auth.controller.js';
import { adminAuth } from '../middleware/auth.js';

const auth_route = express.Router();
auth_route.post('/login', login);
auth_route.post('/logout', logout);

export default auth_route;