const models = require('../db/models');

// 유저의 전체 채팅방 목록을 가저온다.
exports.getChatGroups = async function(userId) {
    try {
        let groups = await models.Group.findAll({
            include:[{
                model: models.GroupJoin,
                where: {user_id : userId}
            }]
        });
        return groups
    } catch (e) {
        throw e;
    }
}


// 해당 채팅방의 멤버를 가져온다.
exports.getChatGroupMembers = async function(groupId) {
    try {
        console.log(groupId);
        let users = await models.User.findAll({
            include:[{
                model: models.GroupJoin,
                where: {group_id : groupId}
            }]
        });
        return users;
    } catch (e) {
        throw e;
    }

} 

// 새로운 채팅방을 생성한다.
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
            sports_id: sports.sports_id
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

        return createGroup.group_id;
    } catch (e) {
        throw e;
    }    
}

// 채팅방 정보를 수정한다.
exports.updateChatGroup = async function(userId, group) {
    try {
        var groupJoin = await models.GroupJoin.findOne({where : {user_id : userId}});
    
        if (groupJoin.role != true) {
            throw("권한이 없습니다.");
        }

        var sports = await models.Sports.findOne({ where: { sports_type: group.sportsType }});

        if (sports == null) {
            sports = await models.Sports.create({
                    sports_type: group.sportsType
            })
        }

        var location = { type:'Point'}
        location.coordinates = group.location;

        var updateGroup = await models.Group.update(
            {
                group_name: group.groupName,
                participants: group.participants,
                gender: group.gender,
                capacity: group.capacity,
                play_datetime: group.playDatetime,
                accessability: group.accessability,
                location: location, 
                min_age: group.minAge,
                max_age: group.maxAge,
                sports_id: sports.sports_id
            },
            { where : {group_id : group.groupId}}
        )

        return updateGroup.group_id;
    } catch (e) {
        throw(e);
    }
}

// 채팅방을 떠난다.
exports.leaveChatGroup = async function(userId, groupId) {
    try {
        await models.GroupJoin.destroy({
            where : { group_id : groupId, user_id : userId}
        })
        return groupId;
    } catch (e) {
        throw(e);
    }
}

// 채팅방에 들어간다.
exports.enterChatGroup = async function(userId, groupId) {
    try {
        await models.GroupJoin.create({
            user_id : userId,
            group_id : groupId,
            role: true
        }, {
            include: [{
                model: models.Group,
                model: models.User
            }]
        })
        return groupId;
    } catch (error) {
        
    }
}
