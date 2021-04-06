const {response} = require('express');
const usuariosget = (req,res = response)=>
{
    const params = req.query;
   res.json({
       msg: 'get API - controllador',
       params
       
   })
}

const usuariopost = (req,res = response) => {
    
    const body = req.body;

    res.json({
        msg: 'get put - controller',
        body
    })
}

const usuarioput = (req,res = response) => {
    
    const id = req.params.id;

    res.json({
        msg: 'get put - controller',
        id
    })
}


const usuariodelete = (req,res = response) => {
    res.json({
        msg: 'get put - controller'
    })
}



module.exports = {
     usuariosget,
     usuariopost,
     usuariodelete,
     usuarioput
}