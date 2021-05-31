import React from "react";
import './Repos.scss'
import {useGithubContext} from "../../context/github/state";


const Repos = () => {
  const {repos, user, setCurrentPage} = useGithubContext()

  const pages = [1, 2, 3, 4, 5, 6]

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
        {pages.map(page => (
          <span className='page' key={Math.random()}>{page}</span>
        ))}
      </div>
    </>
  )
}

export default Repos