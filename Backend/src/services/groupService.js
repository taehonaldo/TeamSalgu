const res = require("express/lib/response");
const { Sequelize } = require("../db/models");
const models = require("../db/models");
const Op = Sequelize.Op;

exports.getGroupList = async function(body) {
    let {select_sports, distance, datetime, gender, min_age, max_age, priority} = body;

    const sports = await models.Sports.findAll({
        where:{
            sports_type:{
                [Op.in]: select_sports
            }
        },
        attribute:[
            'sports_id'
        ]
    });


    sports_id = sports.map(element => element.dataValues.sports_id);
    console.log(sports_id);

    const group = await models.Group.findAll({where: {
        sports_id: {
            [Op.in]: sports_id,
        },
        // location: distance,
        play_datetime: {
            [Op.gte]: datetime
        },
        gender: gender,
        // min_age: {
        //     [Op.gte] : min_age
        // },
        // max_age:{
        //     [Op.lte]: max_age
        // }
    }});

    return group;
}

exports.signUp = async function(body) {
    let {user_id, group_id} = body;

    const groupDB = await models.Group.findAll({
        where:{
            group_id: group_id
        }
    });


    group = groupDB.map(element => element.dataValues);
    console.log(group);

    if(!group.accessability){
        return "대기"
    } 
    else{
        return "가입성공"

    }
}