import styled from 'styled-components'

export const BlogProfile = styled.div`
  display: flex;
  gap: 2rem;

  z-index: 2;
  margin-top: -5.5rem;

  padding: 2rem;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`
export const BlogProfileDetails = styled.div`
  flex: 1;

  div:first-child {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h1 {
      font-size: 1.5rem;
      font-weight: 700;
      color: ${(props) => props.theme['base-title']};
    }

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      font-size: 0.75rem;
      font-weight: 700;
      text-decoration: none;
      color: ${(props) => props.theme.blue};

      svg {
        width: 0.75rem;
        height: 0.75rem;
      }
    }

    a:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }

  p {
    margin-top: 0.5rem;
    color: ${(props) => props.theme['base-text']};
  }

  div:last-child {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    margin-top: 1.5rem;

    color: ${(props) => props.theme['base-subtitle']};

    span {
      display: flex;
      align-items: center;
    }

    svg,
    img {
      width: 1.125rem;
      height: 1.125rem;
      margin-right: 0.5rem;
    }

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
