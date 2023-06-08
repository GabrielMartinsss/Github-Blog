import styled from 'styled-components'

export const PostCardContainer = styled.div`
  max-width: 416px;
  padding: 2rem;
  border-radius: 10px;
  background: ${(props) => props.theme['base-post']};

  div {
    display: flex;
    gap: 1rem;

    margin-bottom: 1.25rem;

    h2 {
      flex: 1;
      font-size: 1.25rem;
      font-weight: 700;
      color: ${(props) => props.theme['base-title']};
    }

    span {
      margin-top: 0.3125rem;
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }
`
