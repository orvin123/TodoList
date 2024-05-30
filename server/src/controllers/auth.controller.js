const { response, request } = require("express");
//*  JWT
const jwt = require('jsonwebtoken')

exports.login = async (req = request, res = response) =>{
    const { user, pass } = req.body;
    console.log(user);
    const accessToken = jwt.sign({ foo: 'bar' }, 'shhhhh');
    return res.json({ accessToken });
}