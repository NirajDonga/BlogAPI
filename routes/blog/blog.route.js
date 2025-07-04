import express from "express";
import requireAuth from "../../middleware/auth.middleware.js";
import {
  allBlogs,
  countLikes,
  createBlog,
  deleteABlog,
  userAllBlogs,
} from "../../controller/blog/blog.controller.js";
const blogRouter = express.Router();

blogRouter.post("/create-a-blog", requireAuth, createBlog);
blogRouter.get("/get-all-blog", allBlogs);
blogRouter.get("/get-user-blogs", requireAuth, userAllBlogs);
blogRouter.delete("/delete-a-blog/:id", requireAuth, deleteABlog);
blogRouter.get("/all-the-likes", countLikes);

export default blogRouter;