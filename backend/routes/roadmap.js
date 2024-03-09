const express = require('express');
const router = express.Router();
const Reply = require('../schema/reply');
const Roadmap= require('../schema/roadmap')
const authenticate=require('../auth')

router.get('/',async(req,res)=>{
    console.log("adsf")
    const data=await Roadmap.find({},' -__v').sort({createdAt:-1})
    console.log(data)
    res.send({data:data})
})

router.post('/',authenticate,async(req,res)=>{
    const {name,content,meta}=req.body;
    const data=new Roadmap({
        name,
        content,
        field:meta
    })
})

router.patch('/vote',authenticate,async(req,res)=>{
    const {upvote}=req.query;

        const updatedRoadMap = await Roadmap.findByIdAndUpdate(
            id,
            { $inc: { upvote } }, // Increment the upvotes count by 1
            { new: true } // Return the updated document
          );
})
module.exports = router;
