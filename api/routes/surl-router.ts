import express from 'express';

import { createSurl, listSurls } from '../controllers/surl-controller';

const router = express.Router();
router.post('/surl', createSurl);
router.get('/surls', listSurls);

export default router;
