import React from 'react'
export default function OnlineFriends({user}) {
    return (
        <div className='onlineFriend'>
            <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                    <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
                    <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUserName">{user.username}</span>
            </li>
        </div>
    )
}
