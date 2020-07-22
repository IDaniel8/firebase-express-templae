import * as express from 'express';
import { TestController } from '@controllers/test';

const router = express.Router();

router.get('/all', TestController.getAllTests);

export const TestRouter = router;
