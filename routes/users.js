const express = require('express');
const router = express.Router();
const userController = require('../app/api/controllers/users');

router.get('/', userController.getUsers);
router.put('/update', userController.updateProfile);
router.get('/:username', userController.getUser);
router.post('/follow', userController.followUser);
router.post('/unfollow', userController.unfollowUser);
router.get('/:username/followers', userController.getFollowers);
router.get('/:username/following', userController.getFollowings);
module.exports = router;