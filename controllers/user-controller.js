const { User } = require('../models');

const userController = {
    //get all users
    getAllUser(req, res) {
        User.find({})
            //-__v is versionKey, propert set on each document when created by Mongoose, contains internal revision of document
            .select('-__v')
            .sort({ _id: -1 })
            .then(allUsers => res.json(allUsers))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .populate('thoughts')
            .populate('friends')
            .then(oneUser => res.json(oneUser))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    createUser({ body }, res) {
        User.create(body)
            .then(createdUser => res.json(createdUser))
            .catch(err => res.status(400).json(err));
    },

    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true }, (err, result) => {
            if (result) {
                res.status(200).json(result);
                console.log(result);
            } else {
                console.log('Something went wrong!');
                res.status(500).json({ message: 'something went wrong' });
            }
        })
    },

    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(deletedUser => {
                if (!deletedUser) {
                    res.status(404).json({ message: 'No user with that id found.' });
                    return;
                }
                res.json(`User ${deletedUser.username} was deleted`);
            })
            .catch(err => res.status(400).json(err));
    },

    addFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.id },
            { $addToSet: { friends: params.friendId } }
        ).then(addedFriend => {
            console.log(addedFriend);
            res.json(addedFriend);
        })
    },

    deleteFriend({params}, res) {
        User.findOneAndUpdate(
            { _id: params.id },
            { $pull: { friends: { _id: params.friendId } } },
            { new: true }
        )
            .then(updatedFriendList => res.json(updatedFriendList))
            .catch(err => res.json(err));
    }
}; 

module.exports = userController; 