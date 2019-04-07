import models from '../models';

const { users } = models;

class Users {
    static async createUser(req, res) {
      const { body } = req
      try {
        const user = await users.create(body);
        if(!body.email || !body.password) {
          return res.status(400).send({
            status: 400,
            errorMessage: 'Email or Password has not to be empty'
          })
        }
        return res.status(201).send({
          status: 200,
          data: user
        })
      }
      catch(err) {
        console.log(err);
      }
    }
}

export default Users;