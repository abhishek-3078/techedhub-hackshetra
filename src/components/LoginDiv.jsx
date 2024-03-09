import React from 'react'
import './LoginDivCSS.css'

const LoginDiv = () => {
    const userdata = localStorage.getItem('userdata');
    console.log("userdata : ",userdata);
    
  return (
    
    <div className="loginDivContainer absolute right-10 z-[100]">
        <div className="profContainer childlogindiv">

            {/* <div className='userContainer'>
                <h2>Dark Avenger</h2>
            </div> */}


            <div class="emailIDContainer">
                architchhajed6@gmail.com
            </div>

            <div className="profPhotoContainer">
                <img src="https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg="></img>
            </div>
        </div>


        <div className="optionContainer childlogindiv">
            <ul>
                <li className="optionItem">
                    <div  className='optionImageContainer' >
                        <img src="https://media.geeksforgeeks.org/img-practice/user_web-1598433228.svg"/>
                    </div>
                    <div className="optionItem-name">
                        <h2>My Profile</h2>
                    </div>
                </li>
                <li className="optionItem">
                    <div className='optionImageContainer'>
                        <img src="https://img.freepik.com/free-icon/books_318-761759.jpg?w=2000"/>
                    </div>
                    <div className="optionItem-name">
                        <h2>My Courses</h2>
                    </div>
                </li>
                <li className="optionItem">
                    <div className='optionImageContainer'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5cC5dP-hjSxV6BK90FNEvaPtJ6NbSXKQbU4FUk3eUJmjUehDTwUqQIxFo3wu8hxRpj_I&usqp=CAU"/>
                    </div>
                    <div className="optionItem-name">
                        <h2>Go Premium</h2>
                    </div>
                </li>
                <li className="optionItem">
                    <div className='optionImageContainer'>
                        <img src="https://icon-library.com/images/pen-icon-png/pen-icon-png-3.jpg"/>
                    </div>
                    <div className="optionItem-name">
                        <h2>Edit Profile</h2>
                    </div>
                </li>
                <li className="optionItem">
                    <div className='optionImageContainer'>
                        <img src="https://cdn-icons-png.flaticon.com/512/900/900834.png"/>
                    </div>
                    <div className="optionItem-name">
                        <h2>Account Settings</h2>
                    </div>
                </li>
                <li className="optionItem">
                    <div className='optionImageContainer'>
                        <img src="https://cdn-icons-png.flaticon.com/512/3580/3580154.png"/>
                    </div>
                    <div className="optionItem-name">
                        <h2>Logout</h2>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default LoginDiv