import React, {useEffect, useState} from 'react'
import './Empty.scss'
import User from '../components/User/User'
import icon from '../icons/empty.svg'
import CenterBox from '../components/CenterBox/CenterBox'
import {useGithubContext} from '../context/github/state'
import {useHistory} from 'react-router-dom'
import Loading from '../components/Loading/Loading'

const Empty = () => {

  const [firstRender, setFirstRender] = useState(true)
  const {user, repos, memo, loading} = useGithubContext()

  const history = useHistory()

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false)
    } else if ((!firstRender && memo && user && (user.login === memo))) {
      history.push('/')
    }
  }, [user, repos])

  return (
    loading
      ? <Loading/>
      : <div className='Empty'>
        {!!user
          ? <>
            <User/>
            <CenterBox
              className='box-empty'
              icon={icon}
              text='Repository list is empty'
            />
          </>
          : history.push('/notfound')
        }
      </div>
  )
}

export default Empty