const express = require('express')

const bfRoutes = express.Router()
const bfController = require('../controller/bfController.js')

bfRoutes.get('/', bfController.index)

bfRoutes.get('/:id', bfController.single)

bfRoutes.get('/bfAllView', (req,res)=>{
 res.render('create',{})
})
bfRoutes.post('/', bfController.create)

bfRoutes.get('/:id/edit', bfController.edit);
bfRoutes.put('/:id', bfController.update);

bfRoutes.delete('/:id', bfController.delete);


module.exports = bfRoutes
