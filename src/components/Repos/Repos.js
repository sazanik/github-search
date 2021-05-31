import React from "react";
import './Repos.scss'
import {useGithubContext} from "../../context/github/state";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";


const Repos = () => {


  const {repos, user, loading,} = useGithubContext()


  return (
    loading
      ? <Loading/>
      : <>
        <div className='Repos'>
          <span>Repositories ({user.public_repos})</span>
          {repos.map(repo => (
              <div className='repo' key={repo.id}>
                <a href={repo.html_url} rel="noreferrer" target='_blank'>{repo.name}</a>
                <span>{repo.description}</span>
              </div>
            )
          )}
        </div>
        <Pagination/>
      </>
  )
}

export default Repos