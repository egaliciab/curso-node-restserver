const{ response } = require('express');

const usuariosGet = (req = request,  res=response) => {
    const { q, nombre='No name', apikey, page=1, limit } = req.query;
    res.json({
        msg: "get API - Controlador",
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPost  = (req, res) => {
    const { nombre, edad } = req.body;

    res.json({
        msg: "Post API - Controlador!",
        nombre,
        edad
    });
};
const usuariosPut  = (req, res) => {
    const id = req.params.id;
    res.json({
        msg: "Put API - Controlador",
        id
    });
};
const usuariosPatch  = (req, res) => {
    res.json({
        msg: "Patch API - Controlador"
    });
};
const usuariosDelete  = (req, res) => {
    res.json({
        msg: "Delete API - Controlador"
    });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}