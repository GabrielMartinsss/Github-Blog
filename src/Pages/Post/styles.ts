import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 54rem;
  margin: 0 auto;
`
export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;

  z-index: 2;
  margin-top: -5.5rem;

  padding: 2rem;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      font-size: 0.75rem;
      font-weight: 700;
      color: ${(props) => props.theme.blue};

      svg {
        font-size: 0.75rem;
      }
    }
  }

  h1 {
    margin-top: 1.25rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-title']};
  }

  div:last-child {
    display: flex;
    align-items: center;
    gap: 2rem;

    margin-top: 0.5rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme['base-span']};

      svg {
        font-size: 1.125rem;
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`
export const PostContent = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2.5rem 2rem;
`
