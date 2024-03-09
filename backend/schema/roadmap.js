const mongoose = require('mongoose');
const {Schema} = mongoose;
const roadmapSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  field:{
    type:[String]
  },
  metadesc:{
    type:String
  },
  upvote:{
    type:Number,
    default:0
  },
  content:[
    {
        title: {
            type: String,
            required: true
          },
          description: {
            type: String,
            required: true
          },
          attachment:[{
            type:String,
            what:String
          }]
          
    }
  ]
}, {
  timestamps: true // Enable timestamps
});

const User = mongoose.model('roadmaps', roadmapSchema);

module.exports = User;
