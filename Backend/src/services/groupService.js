const res = require("express/lib/response");
const models = require("../db/models");

exports.getGroupList = async function(body) {
    let {user_id, select_sports, distance, datetime, gender, min_age, max_age, priority} = body;

    console.log(models.Group.findAll());

    models.Group.findAll()
    .then(result => {
        res.json(result)
    })
    .catch( err => {
        throw Error(err);
    })
}