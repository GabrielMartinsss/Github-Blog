import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import effectLeft from '../../assets/effectHeaderL.svg'
import effectRight from '../../assets/effectHeaderR.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={effectLeft} alt="" />
      <img src={logo} alt="" />
      <img src={effectRight} alt="" />
    </HeaderContainer>
  )
}
