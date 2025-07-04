import express from "express";
import dotenv from "dotenv";
import connect from "./utils/database.config.js";
import router from "./routes/user/user.route.js";
import cookieParser from 'cookie-parser';
import blogRouter from "./routes/blog/blog.route.js"
import likeRouter from "./routes/like/like.route.js";

dotenv.config();

const app = express();
app.use(cookieParser());
app.use(express.json());


app.use('/api/user', router);
app.use('/api/blog',blogRouter);
app.use('/api/like',likeRouter);
connect();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});