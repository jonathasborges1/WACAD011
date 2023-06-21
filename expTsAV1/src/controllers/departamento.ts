import { Request, Response } from 'express';
import { Departamentos } from '../models/Departamentos';

const index = async (req: Request, res: Response) => {
   const departamentos = await Departamentos.findAll();
   res.render('departamento/index', { 
      departamentos: departamentos.map((departamento) => departamento.toJSON()) 
   });
};

const create = async (req: Request, res: Response) => {
   if(req.route.methods.get) {
      res.render('departamento/create',{
         csrf: req.csrfToken()
       });
   } else {
      const departamento = req.body;
      try {
         await Departamentos.create(departamento);
         res.redirect('/departamento');
      } catch (e: any) {
         console.error(e);
         res.render('departamento/create', { 
            csrf: req.csrfToken(),
            departamento,  
            errors: e.errors,
         });
      }
   }
};

const read = async (req: Request, res: Response) => {};
const update = (req: Request, res: Response) => {};
const destroy = (req: Request, res: Response) => {};

export default { index, create, read, update, destroy };