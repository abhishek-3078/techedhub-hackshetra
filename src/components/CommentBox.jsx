import React, { useState } from "react";
import { BsReply } from "react-icons/bs";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { API } from "../assets/constant";
const CommentBox = (props) => {
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleReplyClick = () => {
    setIsReplying(!isReplying);
  };
const getReplies=async(e)=>{
  e.preventDefault()
        console.log("inside")
        try{
            const res= await fetch(`${API}/reply?parent=${props.id}`,{
                method:"GET",
                headers: {
                    'Content-Type': 'application/json' 
                }
            }
            )
            setReplyText("")
        }catch(e){
            console.log("hello")          
        }
}
  const handleReplySubmit = async(e) => {
        e.preventDefault()
        console.log("inside")
        try{
            const res= await fetch(`${API}/reply/reply`,{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json' ,
                    'Authorization':localStorage.getItem('token')
                },
                body:JSON.stringify({
                   message:replyText,
                    parent:props.id
                })
            }
            )
            setReplyText("")
        }catch(e){
            console.log("hello")          
        }
  };

  return (
    <div className="border-y-2 hover:border-white border-solid my-1 border-transparent ease-in-out duration-300 pl-5 pt-3 mt-2">
      <div className="flex w-100">
        <img
          src="https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2022/10/27082154/dirtiest-man-clean-thumb-1-1568x882.jpg"
          alt=""
          className="h-10 w-10 rounded-[50px]"
        />
        <p className="text-white text-lg mt-2 ml-2">@{props.author}</p>
      </div>
      <div className="flex">
        <p className="text-white">{props.text}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex w-[15%] justify-evenly">
          <div>
            <BiUpvote color="white" size={20} />
          </div>
          <p className="text-white ">{props.upvotes}</p>
          <div>
            <BiDownvote color="white" size={20} />
          </div>
        </div>
        <div className="flex mr-5">
          <BsReply
            color="white"
            size={24}
            className="mr-2 cursor-pointer"
            onClick={handleReplyClick}
          />
          <p className="text-white text-lg cursor-pointer" onClick={handleReplyClick}>
            Reply
          </p>
        </div>
      </div>
      {isReplying && (
        <div className="mt-3">
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write your reply..."
            className="w-full h-20 p-2 border border-white rounded"
          />
          <button
            onClick={handleReplySubmit}
            className="mt-2 bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            Submit Reply
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentBox;
