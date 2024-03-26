import "./friend.css"

export default function Friend({ user }) {
    return (
        <div className='friendWrapper'>
            <ul className="sidebarFriendList">
                <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">{user.username}</span>
            </ul>
        </div>
    )
}
