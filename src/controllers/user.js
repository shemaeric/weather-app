import User from '../models/user';

const user = {
    // methodes will go here and you need to follow the same method
    findUsers(req, res) {

        User.findAll()
        .then(user => {
            console.log(user);
            res.sendStatus(200);
        })
        .catch(err => console.log(err))

    },
}

export default user;