import express from 'express';
import user from '../controllers/user'

const router = express.Router();

router.get('/', user.findUsers);

export default router;