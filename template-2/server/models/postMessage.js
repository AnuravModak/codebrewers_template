import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  fname: String,
  lname: String,
  img: {
    data: Buffer,
    contentType: String,
  },
});

var PostData = mongoose.model("PostData", postSchema);

export default PostData;
