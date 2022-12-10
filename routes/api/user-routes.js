const router = require('express').Router();
const{ getAllUser, getUserById, createUser, updateUser, addFriend, deleteUser} = require('../../controllers/user-controller.js');

router
.route('/')
.get(getAllUser)
.post(createUser);

router
.route('/:id')
.get(getUserById)
.put(updateUser)
.put(addFriend)
.delete(deleteUser);

module.exports = router; 