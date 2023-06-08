import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  z-index: -1;

  position: relative;
  height: 18.5rem;
  background: ${(props) => props.theme['base-post']};

  img:nth-child(2) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    margin-top: 4rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    width: 70%;
    height: 40%;
    margin-top: -4rem;
    border-radius: 10rem;
    background: ${(props) => props.theme['base-input']};
    filter: blur(10rem);
  }
`
