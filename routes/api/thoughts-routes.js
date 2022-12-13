const router = require('express').Router();
const { getAllThought, getThoughtById, addThought, updateThought, removeThought, addReaction, removeReaction } = require('../../controllers/thought-controller.js')


router.route('/:userId').get(getAllThought).post(addThought);


router
.route('/:userId/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.post(addReaction)
.delete(removeThought);

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction); 

module.exports = router;