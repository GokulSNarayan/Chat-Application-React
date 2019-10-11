var jwt = require('jsonwebtoken')
const secret_key = "dummyProject"
const userModel = require('../models/user');


exports.func = () => {
    return {
        authenticate: (req, res, next) => {
            var token = req.headers['authorization']
            if (!token) {
                return res.json({ status: 0, message: "No token provided" })
            } else {
                jwt.verify(token, secret_key, (err, result) => {
                    if (err) {
                        return res.json({ status: 0, message: "Invalid Token" })
                    } else {
                        req.user_id = result._id
                        next()
                    }

                })
            }
        },
        register: async (req, res, next) => {
            var input = req.body;
            if (await userModel.findOne({ email: input.email })){
                return res.json({ status: 0, message: "Email already taken" })
            } else {
                
            }
        }
    }
}