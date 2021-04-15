const express = require("express");
const Post = require("./models/Post");

const router = express.Router();

router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.send(posts);
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});

router.post("/posts", async (req, res) => {
  try {
    console.log(req);
    const post = new Post({
      title: req.header.title,
      content: req.header.content,
    });
    await post.save();
    res.send(post);
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});

module.exports = router;
