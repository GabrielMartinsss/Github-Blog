import { BlogProfile, BlogProfileDetails } from './styles'

import githubIcon from '../../../../assets/githubIcon.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

import { useContext } from 'react'
import { GithubContext } from '../../../../context/GithubContext'

export function Profile() {
  const { dataUser } = useContext(GithubContext)

  return (
    <BlogProfile>
      <img src={dataUser.avatar_url} alt="" />
      <BlogProfileDetails>
        <div>
          <h1>{dataUser.name}</h1>
          <a href={dataUser.html_url} target="_blank" rel="noreferrer">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" />
          </a>
        </div>
        <p>{dataUser.bio}</p>
        <div>
          <span>
            <img src={githubIcon} alt="" /> {dataUser.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            Rocketseat
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            {dataUser.followers} seguidores
          </span>
        </div>
      </BlogProfileDetails>
    </BlogProfile>
  )
}
