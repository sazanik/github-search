import React from 'react'
import {millify} from 'millify'
import './User.scss'
import followers from '../../icons/followers.svg'
import following from '../../icons/following.svg'
import {useGithubContext} from '../../context/github/state'

const User = () => {

  const {user} = useGithubContext()

  return (
    <div className='User'>
      <img
        className='user-photo'
        src={user.avatar_url || ''}
        alt={user.login}
      />
      <div className='user-info'>
        <span className='name'>{user.name}</span>
        <br/>
        <a className='login' rel='noreferrer' target='_blank' href={`https://github.com/${user.login}`}>{user.login}</a>
        <br/>

        <div className='follow-flex'>
          <span className='followers'>
            <img src={followers} alt='followers'/>
            {millify(user.followers, {precision: 1, lowercase: true})} followers
          </span>
          <span className='following'>
            <img src={following} alt='following'/>{millify(user.following, {precision: 1, lowercase: true})} following
          </span>
        </div>

      </div>
    </div>
  )
}

export default User