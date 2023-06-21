import { Router } from 'express';
import mainController from '../controllers/main';
import departamentoController from '../controllers/departamento';
import checkAuth from '../middlewares/checkAuth';

const router = Router();

// Main controller
router.get('/', mainController.index);
router.get('/about', mainController.about);
router.get('/ui', mainController.ui);

// Departamento controller
router.get('/departamento', checkAuth, departamentoController.index);
router.get('/departamento/create', checkAuth ,departamentoController.create);  // Carrega os dados para o formulário
router.post('/departamento/create', checkAuth, departamentoController.create); // processa o envio das informacoes do formulario
router.get('/departamento/:id', checkAuth ,departamentoController.read);
router.get('/departamento/update/:id', checkAuth ,departamentoController.update);
router.post('/departamento/update/:id', checkAuth ,departamentoController.update);
router.post('/departamento/delete/:id', checkAuth, departamentoController.destroy);

router.get('/apagarCookie', mainController.clearCookie);
router.get('/criarCookie', mainController.createCookie);

router.get('/login', mainController.login);
router.post('/login', mainController.login);
router.get('/logout', mainController.logout);

export default router;
