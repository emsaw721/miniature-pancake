const { Thought, User } = require('../models');

const thoughtController = {

    getAllThought(req, res) {
        Thought.find({})
            .select('-__v')
            .sort({ _id: -1 })
            .then(allThoughts => res.json(allThoughts))
            .catch(err => {
                console.log(err);
                res.status(400).json({ message: 'No thoughts found.' })
            });
    },

    addThought({ body }, res) {
        Thought.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: body.this.id },
                    { $push: { thoughts: _id } },
                    { new: true }
                );
                console.log('New object created')
            })
            .then(userData => {
                console.log(userData)
                if (!userData) {
                    res.status(404).json({ message: 'No user found with is id.' });
                    return;
                }
                res.json(userData)
            })
            .catch(err =>
                res.json(err));
    },

    addReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $addToSet: { reactions: body } },
            { new: true }
        )
            .then(addedReaction => {
                if (!addedReaction) {
                    res.status(404).json({ message: 'No user with this id found.' });
                    return;
                }
                res.json(addedReaction)
            })
            .catch(err => {
                console.log(err);
                res.json(err)
            });
    },

    removeThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.thoughtId })
            .then(deletedThought => {
                if (!deletedThought) {
                    return res.status(404).json({ messge: 'No thought with this id. ' })
                }
                return User.findOneAndUpdate(
                    { _id: params.userId },
                    { $pull: { thoughts: params.thoughtId } },
                    { new: true }
                );
            })
            .then(updatedUser => {
                if (!updatedUser) {
                    res.status(404).json({ message: 'No user with this id.' });
                    return;
                }
                res.json(updatedUser);
            })
            .catch(err => res.json(err))
    },

    removeReaction({ params }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $pull: { reactions: { reactionId: params.reactionId } } },
            { new: true }
        )
            .then(updatedThought => res.json(updatedThought))
            .catch(err => res.json(err));
    }
};

module.exports = thoughtController; 