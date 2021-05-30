import React from "react";
import './User.scss'
import followers from '../../icons/followers.svg'
import following from '../../icons/following.svg'
import {useGithubContext} from "../../context/github/state";

const User = () => {

  const {user} = useGithubContext()

  return (
    <div className="User">
      <img
        className='user-photo'
        src={user.avatar_url || ''}
        alt={user.login}
      />
      <div className="user-info">
        <span className='name'>{user.name}</span>
        <br/>
        <a className='login' rel="noreferrer" target='_blank' href={`https://github.com/${user.login}`}>{user.login}</a>
        <br/>

        <div className='follow-flex'>
          <span className="followers">
            <img src={followers} alt="followers"/>{user.followers} followers
          </span>

          <span className="following">
            <img src={following} alt="following"/>{user.following} followers
          </span>
        </div>

      </div>
    </div>
  )
}

export default User