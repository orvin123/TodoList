const { response, request } = require("express");

//const {  } = require("../models/web.model");
exports.home = async (req = request, res = response) => {
    return res.json({
        statusCode: res.statusCode = 200,
        error: false,
        message: "Hola Mundo",
        body: []
    });
}