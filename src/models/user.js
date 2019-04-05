import Sequilizer from 'sequelize';
import db from '../config/db';

const User = db.define('users', {
    firstname: {
        type: Sequilizer.STRING
    },
    lastname: {
        type: Sequilizer.STRING
    },
    email: {
        type: Sequilizer.STRING
    },
    password: {
        type: Sequilizer.STRING
    },
    createdAt: {
        type: Sequilizer.DATE
    },
    updatedAt: {
        type: Sequilizer.DATE
    }
})

db.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  })

export default User;