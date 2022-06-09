const userService = require('../services/userService')

exports.login = async (req, res) =>{
    try{
        let accessToken = await groupService.getGroupList(req.body);
        return res.json(rooms);
    } catch(err){
        return res.status(500).json(err);
    }
}

exports.signUp = async (req, res) =>{
    try{
        console.log("hi");
        let status = await groupService.signUp(req.body);
        return res.json(status);
    } catch(err){
        return res.status(500).json(err);
    }
}


exports.findUsername = async (req, res) =>{
    
}