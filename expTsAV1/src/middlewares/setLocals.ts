import { Request, Response, NextFunction } from 'express';

// Arquivo src/middlewares/setLocals.ts
export const setLocals = (req: Request, res: Response, next:NextFunction ) => {
 res.locals.logado = req.cookies['logado'];
 next();
};