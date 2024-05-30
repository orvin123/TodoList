const { response, request } = require("express");

//const {  } = require("../models/web.model");
exports.home = async (req = request, res = response) => {
    console.log('ddd');
    return res.json({
        statusCode: res.statusCode = 200,
        error: false,
        message: "Hola Mundo",
        body: [1,2,3]
    });
}