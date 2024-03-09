const mongoose = require('mongoose');
const {Schema} = mongoose;
const courseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  field:{
    type:[String]
  },
  discription:{
    type:String,
  },
  attachments:[{
    type:String,
    what:String
  }]
}, {
  timestamps: true // Enable timestamps
});

const User = mongoose.model('course', courseSchema);

module.exports = User;
