import React from "react";
import './User.scss'
import followers from '../../icons/followers.svg'
import following from '../../icons/following.svg'
import userPhoto from '../../icons/user-photo.jpeg'
import {Link} from "react-router-dom";

const User = () => {
  return (
    <div className="User">
      <img
        className='user-photo'
        src={userPhoto}
        alt="user"
      />
      <div className="user-info">
        <span className='name'>Name Surname</span>
        <br/>
        <Link className='login' to='/'>login</Link>
        <br/>

        <div className='follow-flex'>
          <span className="followers">
            <img src={followers} alt="followers"/>26.5k followers
          </span>

          <span className="following">
            <img src={following} alt="following"/>138 followers
          </span>
        </div>


      </div>
    </div>
  )
}

export default User