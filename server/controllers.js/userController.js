const { User } = require("./../models")
const generateToken = require("./../helper/jwt")

class userControlller {
  static login(req, res) {
    const { googleId, iamgeUrl, email, name } = req.body

    User.findOne({
      where: {
        email
      }
    })
      .then((data) => {
        if (data) {
          const { id, email, password } = data
          const access_token = generateToken({
            id,
            email,
            password
          })

          res.status(200).json({
            id,
            email,
            access_token
          })
        } else {
          return User.create({
            email,
            password: new Date() + ""
          })
            .then((data) => {
              console.log(data)

              const { email, password } = data
              const access_token = generateToken({
                email,
                password
              })

              res.status(200).json({
                email,
                access_token
              })
            })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = userControlller