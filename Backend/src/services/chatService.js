const models = require('../db/models');

exports.getChatGroups = async function() {
    let result = await models.Group.findAll({});
    return result;
}

exports.getChatGroupMembers = async function(groupId) {
    try {
        let groupJoins= await models.GroupJoin.findAll({where: { group_id : groupId}});
        
    } catch (error) {
        
    }

} 

exports.createChatGroup = async function(userId, group) {
    try {
        var sports = await models.Sports.findOne({ where: { sports_type: group.sportsType } });
        
        if (sports == null) {
            sports = await models.Sports.create({
                    sports_type: group.sportsType
            })
        }
        
        var location = { type:'Point'}
        location.coordinates = group.location;
        
        let createGroup = await models.Group.create({
            group_name: group.groupName,
            participants: group.participants,
            gender: group.gender,
            capacity: group.capacity,
            play_datetime: group.playDatetime,
            accessability: group.accessability,
            location: location, 
            min_age: group.minAge,
            max_age: group.maxAge,
            sports_id: sports.sportsId
        }, {
            include: [{
                model: models.Sports
            }]
        });

        await models.GroupJoin.create({
            user_id : userId,
            group_id : createGroup.group_id,
            role: true
        }, {
            include: [{
                model: models.Group,
                model: models.User
            }]
        })

        return "ok";
    } catch (e) {
        throw e;
    }    
}

exports.updateChatGroup = async function() {

}

exports.leaveChatGroup = async function() {

}

exports.enterChatGroup = async function() {

}
