import express from 'express';
import User from '../controllers/user'

const router = express.Router();

router.post('/auth/signup', User.createUser);

export default router;