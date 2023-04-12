const { log } = require('debug/src/browser');
const user = require('../data/users.json')
const teacher = require('../data/teachers.json')
const jwt = require('../helper/jwt');
const { map } = require('../app');

module.exports = class {
static async login(req,res){
    try {
    
        const userAccount =user.find( ({ username }) => username === req.body.username );
     
        if (!userAccount) {
            throw {
              code: 404,
              message: "Username tidak ditemukan"
            }
          }
          
        if(userAccount.password !== req.body.password){
          throw {
            code: 400,
            message: "Password salah"
          }
        }

        const response = {
            id: userAccount.id,
            password: userAccount.password,
            username: userAccount.username
          }
          const access_token = jwt.generateToken(response)
          res.status(200).json({
            access_token
          })
            
          
    } catch (error) {
        res.status(error?.code || 500).json(error)
    }
}
static async getAllTeacher(req,res){
  try {
    const allData = []
    teacher.forEach(function (value) {
      allData.push(value)
    })
    res.status(200).json({
      data : allData
    })
  } catch (error) {
    res.status(error?.code || 500).json(error)
  }
}
}