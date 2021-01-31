import styled from 'styled-components'

export const NavbarMain = styled.div`
    border-bottom:1px solid;
    padding: 20px;
    background: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
    border-bottom-color: ${props => props.theme.mode === 'dark'? 'rgba(255,255,255,0.2)':'rgba(0,0,0,0.1)'}
`

export const NavContent = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    position: relative;
`
export const ImageContainer = styled.div`
   width: 124px;
`
export const Image = styled.img`
  width: 100%;
`
export const SwitchTheme = styled.div`
  position: absolute;
  right: 5px;
  color: ${props => props.theme.TEXT_COLOR};
`