import React from "react";
import './Repos.scss'
import {useGithubContext} from "../../context/github/state";


const Repos = () => {
  const {repos} = useGithubContext()

  return (
    <div className='Repos'>
      <span>Repositories ({repos.length})</span>
      {repos.map((repo, idx) => (
        <div className='repo' key={repo.id}>
          <a href={repo.html_url} rel="noreferrer" target='_blank'>{repo.name}</a>
          <span>{repo.description}</span>
        </div>

        )
      )}
    </div>

  )
}

export default Repos