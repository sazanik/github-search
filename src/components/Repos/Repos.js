import React, {useEffect, useState} from "react";
import './Repos.scss'
import {useGithubContext} from "../../context/github/state";


const Repos = () => {

  const [firstRender, setFirstRender] = useState(true)

  const {repos, user, currentPage, perPage, setCurrentPage, getRepos, memo} = useGithubContext()

  const pages = [1, 2, 3, 4, 5, 6]

  useEffect(() => {
    if (!firstRender) {
      setFirstRender(false)
      getRepos(memo, perPage, currentPage)
    } else {
      console.log('SECOND render')
    }
  }, [currentPage])

  const clickHandler = (memo, perPage, currentPage) => {
    setCurrentPage(currentPage)
    getRepos(memo, perPage, currentPage)
  }

  return (
    <>
      <div className='Repos'>
        <span>Repositories ({user.public_repos})</span>
        {repos.map((repo, idx) => (
            <div className='repo' key={repo.id}>
              <a href={repo.html_url} rel="noreferrer" target='_blank'>{repo.name}</a>
              <span>{repo.description}</span>
            </div>

          )
        )}
      </div>
      <div className='pages'>
        {pages.map((page, idx) => (
          <span
            className={currentPage === page ? 'current-page' : 'page'}
            key={Math.random()}
            onClick={() => clickHandler(memo, perPage, page)}
          >
            {page}
          </span>
        ))}
      </div>
    </>
  )
}

export default Repos