import { Request, Response } from 'express';
import MockJSON from '@db/mock.json';

export const TestController = {
  getAllTests: (_: Request, res: Response): Response<{ success: boolean; data: typeof MockJSON }> => {
    return res.status(200).json({
      success: true,
      data: MockJSON,
    });
  },
};
