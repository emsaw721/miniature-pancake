const router = require('express').Router();
const { getAllThought, getThoughtById, addThought, removeThought, addReaction, removeReaction } = require('../../controllers/thought-controller.js')


router.route('/:userId').get(getAllThought).post(addThought);


router
.route('/:userId/:thoughtId')
.get(getThoughtById)
.put(addReaction)
.delete(removeThought);

router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction); 

module.exports = router;