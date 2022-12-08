const router = require('express').Router();
const { getAllThought, addThought, removeThought, addReaction, removeReaction } = require('../../controllers/thought-controller.js')


router.route('/:userId').get(getAllThought).post(addThought);


router
.route('/:userId/:thoughtId')
.put(addReaction)
.delete(removeThought);

router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction); 

module.exports = router;