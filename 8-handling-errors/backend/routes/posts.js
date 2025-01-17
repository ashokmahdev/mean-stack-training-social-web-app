const express = require("express");
const multer = require("multer");
const postsController = require("../controllers/posts");
const extractFile = require("../middleware/file");

const Post = require("../models/post");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", checkAuth, extractFile, postsController.createPost);

router.put("/:id", checkAuth, extractFile, postsController.updatePost);

router.get("", postsController.getPosts);

router.get("/:id", postsController.getPost);
router.delete("/:id", checkAuth, postsController.deletePost);

module.exports = router;
