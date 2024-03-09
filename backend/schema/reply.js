const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to a User schema (if applicable)
      required: true
    },
    username: {
      type: String,
      required: true
    }
  },
  // post: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   refPath: 'onModel'
  // },
  // onModel: {
  //   type: String,
  //   enum: ['Roadmap', 'Course']
  // },
  post:{
    type:String
  },
  parentReply: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reply' // Reference to another reply (parent reply)
  },
  upvotes: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Reply = mongoose.model('Reply', replySchema);

module.exports = Reply;
