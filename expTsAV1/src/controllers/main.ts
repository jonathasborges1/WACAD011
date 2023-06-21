import { Request, Response } from 'express';

const index = (req: Request, res: Response) => {
  res.render('main/index');
};

const about = (req: Request, res: Response) => {
  res.render('main/about');
};

const ui = (req: Request, res: Response) => {
  res.render('main/ui');
};

const clearCookie = (req: Request, res: Response) => {
  res.clearCookie('nomeCookie');
  res.send('Cookie apagado');
}

const login = (req: Request, res: Response) => {
  if(req.route.methods.get) {
      res.render('main/login',{
      csrf: req.csrfToken()
    });
  } else {
    const { username, senha } = req.body;
    if(username === "user" && senha === "123"){
      res.cookie('logado', true);
      res.redirect('/'); 
    } else {
      res.render('main/login',{
        csrf: req.csrfToken(),
        username,
        senha,
        senhaIncorreta: true
      })
    }
  }
}

const logout = (req: Request, res: Response) => {
  res.clearCookie('logado');
  res.redirect('/');
}

const createCookie = function (req: Request, res: Response) {
  if (!('nomeCookie' in req.cookies)) {
  res.cookie('nomeCookie', 'valorCookie'); 
  res.send('Você NUNCA passou por aqui!'); 
  } else {
  res.send('Você JÁ passou por aqui'); 
  }
};



export default { index, about, ui, clearCookie, login, logout, createCookie };
