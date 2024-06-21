import express from 'express';
import TokenController from '../controllers/tokenController.js';

const router = express.Router();

router.post('/new-token', TokenController.newTokenController);

export default router;