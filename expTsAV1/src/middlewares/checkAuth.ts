import { Request, Response, NextFunction } from 'express';

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
   if (!req.cookies['logado']) {
      res.redirect('/login');
   } else {
      next();
   }
} 

export default checkAuth;