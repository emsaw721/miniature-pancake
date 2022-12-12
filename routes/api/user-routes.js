const router = require('express').Router();
const{ getAllUser, getUserById, createUser, updateUser, addFriend, deleteUser, removeFriend} = require('../../controllers/user-controller.js');

router
.route('/')
.get(getAllUser)
.post(createUser);

router
.route('/:id')
.get(getUserById)
.put(updateUser,addFriend)
.delete(deleteUser);

router.route('/:id/:friendId').delete(removeFriend); 

module.exports = router; 