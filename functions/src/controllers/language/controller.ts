import { Request, Response } from 'express';
import LanguagesJSON from '../../db/languages.json';

function getAllLanguages(_: Request, res: Response): Response<{ success: boolean; data: typeof LanguagesJSON }> {
  return res.status(200).json({
    success: true,
    data: LanguagesJSON,
  });
}

export default {
  getAllLanguages,
};
