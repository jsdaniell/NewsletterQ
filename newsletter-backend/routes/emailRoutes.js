import express from 'express';
import EmailController from '../controllers/emailController.js';

const router = express.Router();

router.post('/register-email-on-newsletter', EmailController.registerEmail);
router.get('/get-emails', EmailController.getEmails);

export default router;