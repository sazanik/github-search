import React, {useEffect, useState} from 'react'
import './Pagination.scss'
import {useGithubContext} from '../../context/github/state'
import Loading from '../Loading/Loading'

const Pagination = () => {

  const [firstRender, setFirstRender] = useState(true)
  const {currentPage, perPage, setCurrentPage, getRepos, memo, loading, totalRepos} = useGithubContext()

  const pagesCount = Math.ceil(totalRepos / perPage)
  const pagesArr = []

  const createPages = (pagesArr, pagesCount, currentPage) => {
    if (pagesCount > 10) {
      if (currentPage > 5) {
        for (let i = currentPage - 4; i <= currentPage + 5; i++) {
          pagesArr.push(i)
          if (i === pagesCount) return
        }
      } else {
        for (let i = 1; i <= 10; i++) {
          pagesArr.push(i)
          if (i === pagesCount) return
        }
      }
    } else {
      for (let i = 1; i <= pagesCount; i++) {
        pagesArr.push(i)
      }
    }
  }
  createPages(pagesArr, pagesCount, currentPage)

  useEffect(() => {
    if (!firstRender) {
      setFirstRender(false)
      getRepos(memo, perPage, currentPage)
      createPages(pagesArr, pagesCount, currentPage)
    }
  }, [currentPage])

  const clickHandler = (memo, perPage, currentPage) => {
    if (currentPage === 0 || currentPage === pagesCount + 1) return

    setCurrentPage(currentPage)
    getRepos(memo, perPage, currentPage)
    createPages(pagesArr, pagesCount, currentPage)
  }

  const infoPaginate = () => {
    const firstItemInPage = currentPage * 4 - 3
    const string = currentPage === pagesCount && firstItemInPage === totalRepos
      ? totalRepos
      : currentPage === pagesCount
        ? firstItemInPage + '-' + totalRepos
        : firstItemInPage + '-' + currentPage * 4

    return string + ' of ' + totalRepos + ' items'
  }

  return (
    loading
      ? <Loading/>
      : pagesArr.length < 2
      ? null
      : <div className='Pagination'>
        <div className='flex-box'>
          <span className='pages-info'>
            {infoPaginate()}
          </span>
          <span className='one-step'
                onClick={() => clickHandler(memo, perPage, currentPage - 1)}
          >{'<'}</span>
          {pagesArr.map(page => (
            <span
              className={currentPage === page ? 'current-page' : 'page'}
              key={Math.random()}
              onClick={() => clickHandler(memo, perPage, page)}
            >{page}</span>
          ))}
          <span className='one-step'
                onClick={() => clickHandler(memo, perPage, currentPage + 1)}
          >{'>'}</span>
        </div>
      </div>
  )
}

export default Pagination