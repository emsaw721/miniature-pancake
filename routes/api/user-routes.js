const router = require('express').Router();
const{ getAllUser, getUserById, createUser, updateUser, addFriend, deleteUser, deleteFriend} = require('../../controllers/user-controller.js');

router
.route('/')
.get(getAllUser)
.post(createUser);

router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);


router.route('/:id/friends/:friendId')
.post(addFriend)
.delete(deleteFriend); 

module.exports = router; 