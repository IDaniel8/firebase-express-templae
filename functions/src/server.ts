import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import LanguageController from './controllers/language';

const app = express();

app
  .use(cors({ origin: true }))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use('/languages', LanguageController)
  .get('*', (_: Request, res: Response) => res.status(404).end());

export default app;
