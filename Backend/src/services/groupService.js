const res = require("express/lib/response");
const models = require("../db/models");

exports.getGroupList = async function(body) {
    let {user_id, select_sports, distance, datetime, gender, min_age, max_age, priority} = body;

    const group = await models.Group.findAll({where: ""});

    console.log(group);

    return group;

    // return await models.Group.findAll()
    // .then(result => {
    //     console.log("hi2");
    //     res.json(result)
    // })
    // .catch( err => {
    //     console.log("hi3");
    //     throw Error(err);
    // })
}