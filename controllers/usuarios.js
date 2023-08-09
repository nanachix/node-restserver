const { request,response } = require('express')

const usuariosGet  = (req = request, res = response) => {
    const {q ,name = 'no name', apikey} = req.query;
    res.json({
        msg: 'get API - controller',
        q,
        name,
        apikey
    })
}

const usuariosPost  = (req = request, res = response) => {
    const {id, nombre} = req.body;
    res.json({
        msg: 'post API - controller',
        id,
        nombre
    })
}

const usuariosPut  = (req = request, res = response) => {
    const id = req.params.id
    res.json({
        msg: 'put API - controller',
        id
    })
}

const usuariosDelete  = (req = request, res = response) => {
    res.json({
        msg: 'delete API - controller'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}