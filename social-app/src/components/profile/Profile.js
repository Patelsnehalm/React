import "./profile.css"
import Topbar from '../topbar/Topbar'
import Sidebar from '../sidebar/Sidebar'
import Feed from '../feed/Feed'
import Rightbar from '../rightbar/Rightbar'

export default function Profile() {
    return (
        <div>
            <Topbar></Topbar>
            <div className="profile">
                <Sidebar></Sidebar>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="assets/post/3.jpeg" alt="" className="profileCoverImg" />
                            <img src="assets/person/7.jpeg" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Snehal Patel</h4>
                            <span className="profileInfoDesc">Hello</span>
                        </div>

                    </div>
                    <div className="profileRightBottom">
                        <Feed></Feed>
                        <Rightbar profile></Rightbar>
                    </div>
                </div>

            </div>
        </div>
    )
}
