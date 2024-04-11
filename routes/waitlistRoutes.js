import express from 'express';
import { signupToWaitlist } from '../controllers/waitlistController.js';

const router = express.Router();

router.post('/signup-to-waitlist', signupToWaitlist);

export default router;
