const { movie } = require('../models')

exports.index = (req, res) => {
    movie.findAll()
    .then(function (result) {
        res.json({
            status : true,
            data : result,
            message : "success"
        });
    })
    .catch(function (error) {
        res.json({
            status : false,
            data : false,
            message : error.message 
        });
    });
}

exports.show = (req, res) => {
    let id = req.params.id
    movie.findOne({ where: {id} })
    .then(function (result) {
        res.json({
            status : true,
            data : result,
            message : "success"
        });
    })
    .catch(function (error) {
        res.json({
            status : false,
            data : false,
            message : error.message 
        });
    });
}

exports.create = (req, res) => {
    movie.create(req.body)
    .then(function (result) {
        res.json({
            status : true,
            data : result,
            message : "success"
        });
    })
    .catch(function (error) {
        res.json({
            status : false,
            data : false,
            message : error.message 
        });
    });
}

exports.update = (req, res) => {
    let id = req.params.id
    movie.update(req.body, { where: {id} })
    .then(function (result) {
        let resp = { id: id}
        res.json({
            status : true,
            data : result,
            message : "id : " + id
        });
    })
    .catch(function (error) {
        res.json({
            status : false,
            data : false,
            message : error.message 
        });
    });
}

exports.delete = (req, res) => {
    let id = req.params.id
    movie.destroy({ where: {id} })
    .then(function (result) {
        let message;
        if(result == 0){
            message = "Not Found";
        }else{
            message = "Deleted Success";
        }
        let resData = {
            status: "success",
            message: message
        }
        res.json({
            status : true,
            data : resData,
            message : "success"
        });
    })
    .catch(function (error) {
        res.json({
            status : false,
            data : false,
            message : error.message 
        });
    });
}
