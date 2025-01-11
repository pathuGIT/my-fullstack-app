import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: [true, "Please enter post title"],
      },

      content: {
        type: String,
        required: [true, "Please enter post content"]
      }
    }
);      

const Post = mongoose.model("Posts", PostSchema);

export default Post;