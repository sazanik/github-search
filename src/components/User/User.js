import React from "react";
import './User.scss'
import followers from '../../icons/followers.svg'
import following from '../../icons/following.svg'
import {Link} from "react-router-dom";
import {useGithubContext} from "../../context/github/state";

const User = () => {

  const {user} = useGithubContext()

  console.log(user)

  return (
    <div className="User">
      <img
        className='user-photo'
        src={user.avatar_url}
        alt={user.login}
      />
      <div className="user-info">
        <span className='name'>{user.name}</span>
        <br/>
        <Link className='login' to={`https://github.com/${user.login}`}>{user.login}</Link>
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