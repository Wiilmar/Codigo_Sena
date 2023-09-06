const express = require('express');
const router = express.Router();
const Task = require ('../models/task');
/*
router.get('/', (req,res) => {
    //Esto me permite responder con un hello word cuando llegue una peticion a mi ruta del servidor.
    res.send("Hello Word 2");
}) 
*/

router.get('/',(req,res)=>{
    Task.find({})
        .then(tasks => console.log(tasks))
        .catch(err => console.error(err));
    res.json({
        status:'si funciona'
    });
})
module.exports = router;

