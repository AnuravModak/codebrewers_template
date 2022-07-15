import express from "express";
import { createPost } from "../controller/posts.js";

import bodyParser from "body-parser";

const router = express.Router();

router.post("/add", createPost);
export default router;
