import { PostContainer, PostContent, PostInfo } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendarDay,
  faChevronLeft,
  faComment,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

import githubIcon from '../../assets/githubIcon.svg'

export function Post() {
  return (
    <PostContainer>
      <PostInfo>
        <div>
          <a href="#">
            <FontAwesomeIcon icon={faChevronLeft} />
            VOLTAR
          </a>
          <a href="#">
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <h1>JavaScript data types and data structures</h1>
        <div>
          <span>
            <img src={githubIcon} alt="" /> cameronwll
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            Há 1 dia
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />5 comentários
          </span>
        </div>
      </PostInfo>
      <PostContent>
        <span>content</span>
      </PostContent>
    </PostContainer>
  )
}
