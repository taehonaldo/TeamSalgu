const groupService = require('../services/groupService')

/*
{
	"user_id": "1234",
	"select_sports": ["농구", "축구"],
	"distance": 20,
	"datetime": TimeStamp,
	"gender": "male",
	"min_age": 19,
	"max_age": 79,
	"priority": "날짜순"
}
*/


exports.getGroupList = async (req, res) =>{
    try{
        let rooms = await groupService.getGroupList(req.body);
        return res.json(rooms);
    } catch(err){
        return res.status(500).json(err);
    }
}

exports.signUp = async (req, res) =>{
    
}


exports.updateGroupUnlike = async (req, res) =>{
    
}