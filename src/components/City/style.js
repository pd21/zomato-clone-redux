import styled from 'styled-components'

export const MainContainer = styled.div`
   background: ${props => props.theme.PRIMARY_BACKGROUND_COLOR}
`
export const BackgroundContainer = styled.div`
   width: 100%;
   height: calc(100vh - 30rem);
   min-height: 450px;
   max-height: 570px;
   background-image: url('https://thebarnexpress.com/wp-content/uploads/2016/10/slide-1.jpg');
   background-size: cover;
   background-repeat: no-repeat;
   background-position: left 10% bottom 65%;
   position: relative;
   margin-bottom: 40px;
   position: relative;
`

export const TitleContainer = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%,-50%);
   color: #fff;
` 
export const ImageContainer =  styled.div`
   width: 300px;
   height: 60px;
   margin: 0 auto;

   @media (max-width: 480px){
      width: 250px;
      height: 47px;
   }
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
`
export const Title = styled.div`
   margin-top: 30px;
   text-align: center;
   font-size: 36px;
   text-transform: capitalize;

   @media (max-width: 480px){
      font-size: 20px;
   }
`

export const SubContainer = styled.div`
   position: relative;
   margin: 0 auto;
   max-width: 1100px;
`

export const BackgroundOpaqueEffect = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   background: rgba(0,0,0,0.4);
`

export const SwitchTheme = styled.div`
   color: #fff;
   position: absolute;
   right: 20px;
   top: 20px;
`