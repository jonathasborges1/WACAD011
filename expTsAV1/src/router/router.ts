import { Router } from 'express';
import mainController from '../controllers/main';
import departamentoController from '../controllers/departamento';

const router = Router();

// Main controller
router.get('/', mainController.index);
router.get('/about', mainController.about);
router.get('/ui', mainController.ui);

// Departamento controller
router.get('/departamento', departamentoController.index);
router.get('/departamento/create', departamentoController.create);  // Carrega os dados para o formulário
router.post('/departamento/create', departamentoController.create); // processa o envio das informacoes do formulario
router.get('/departamento/:id', departamentoController.read);
router.get('/departamento/update/:id', departamentoController.update);
router.post('/departamento/update/:id', departamentoController.update);
router.post('/departamento/delete/:id', departamentoController.destroy);


export default router;
