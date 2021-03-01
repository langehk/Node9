const Governmentform = require('../models/governmentform-model');


getGovernmentforms = async (req, res) => {
    await Governmentform.find({}, (err, governmentforms) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!governmentforms.length) {
            return res
                .status(404)
                .json({ success: false, error: `Player not found` })
        }
        return res.status(200).json({ success: true, data: governmentforms })
    }).catch(err => console.log(err))
}




module.exports = {
    getGovernmentforms
}