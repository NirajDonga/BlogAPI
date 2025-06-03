import express from "express";
import { likedBlog, toggleBlogLikes } from "../../controller/like/like.controller.js";
import requireAuth from "../../middleware/auth.middleware.js";

const likeRouter=express.Router();

likeRouter.post('/toggle-likes/:blogId', requireAuth, toggleBlogLikes);
likeRouter.get('/blogs-i-liked', requireAuth, likedBlog);

export default likeRouter;