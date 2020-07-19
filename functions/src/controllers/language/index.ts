import * as express from 'express';
import controller from './controller';

const router = express.Router();

router.get('/all', controller.getAllLanguages);

export default router;
