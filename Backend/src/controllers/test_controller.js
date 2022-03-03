const testService = require('../services/test_service')

exports.getTestData = async function (req, res) {
    testService.getTestData();
}