const {Router} = require('express');
const {usuariosget, usuarioput, usuariodelete, usuariopost} = require('../controllers/userController');
const router = Router();



router.get('/', usuariosget);    
router.post('/', usuariopost);
router.delete('/', usuariodelete);
router.put('/:id', usuarioput)



module.exports = router;