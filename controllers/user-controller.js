const {User} = require('../models');

const userController = {
    //get all users
    getAllUser(req,res) {
        User.find({})
        .then(allUsers => res.json(allUsers))
        .catch(err => {
            console.log(err);
            res.status(400).json(err); 
        });
    },

    getUserById({params}, res) {
        User.findOne({_id: params.id})
        .populate('reactions')
        .populate('friends')
        .then(oneUser => res.json(oneUser))
        .catch(err => {
            console.log(err);
            res.status(400).json(err); 
        })
    },

    createUser({ body}, res) {
        User.create(body)
        .then(createdUser => res.json(createdUser))
        .catch(err => res.status(400).json(err)); 
    },

    updateUser({params, body}, res) {
        User.fineOneAndUpdate({_id: params.id}, body, {new:true})
        .then(updatedUser => {
            if(!updatedUser) {
                res.status(404).json({message: 'No user with that id found.'});
                return; 
            } 
            res.json(updatedUser)
        })
        .catch(err => res.status(400).json(err)); 
    },

    deleteUser({params}, res) {
        User.findOneAndDelete({_id: params.id})
        .then(deletedUser => {
            if(!deletedUser) {
                res.status(404).json({message: 'No user with that id found.'});
                return; 
            }
            res.json(deletedUser);
        })
        .catch(err => res.status(400).json(err)); 
    }
}

module.exports = userController; 