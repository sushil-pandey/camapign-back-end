
const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/controller');


router.post('/register', ctrlUser.register);
router.get('/get', ctrlUser.get);
router.put('/update:id', ctrlUser.update); 
router.delete('/delete:id', ctrlUser.delete)



module.exports = router;
