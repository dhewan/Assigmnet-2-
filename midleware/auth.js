const user = require('../data/users.json')
const jwt= require('../helper/jwt')

module.exports = async (req,res,next)=>{
    try {
        const payload = jwt.verifyToken(req.headers.access_token)
        if (!payload) {
            res.status(404).send({ message: 'user not found payload' })
        }
        console.log(payload);
        const userData = user.find( ({ username,password }) => username === payload.username && password=== payload.password);

        console.log("------2");
 
        if (!userData) {
            res.status(404).send({ message: 'user not found' })
        }
         else {
            req.userLogin = userData.dataValues
  
            next()
        }
    } catch (error) {
        res.status(error?.code || 500).json(error)}
}