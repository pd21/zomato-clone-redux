import styled from 'styled-components'

export const MainContainer = styled.div`
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
`

export const TitleContainer = styled.div`
   position: absolute;
   top: 40%;
   left: 50%;
   transform: translate(-50%,-50%);
   color: #fff;
` 
export const ImageContainer =  styled.div`
  width: 300px;
  height: 60px;
  margin: 0 auto;
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
`
export const Title = styled.div`
   margin-top: 30px;
   text-align: center;
   font-size: 36px;
`
//Style for sub container

export const SubContainer = styled.div`
    position: relative;
    margin: 0 auto;
    max-width: 1100px;
    height:800px;
`

export const CollectionContainer = styled.div`
    margin-top: 60px;
`
export const CollectionTitle = styled.div`
    font-size: 36px;
    line-height: 1.2;
    font-weight: 500;
    color: rgb(28, 28, 28);
`
export const CollectionSubtitleContainer = styled.div`
    display: flex;
    margin-top: 4px;
    line-height: 1.4;
    font-weight: 400;
    color: rgb(54, 54, 54);
    font-size: 18px;
    font-family: Okra,Helvetica,sans-serif;
`
export const CollectionSubtitle = styled.div`
`
export const AllCollectionTitle = styled.a`
    color: rgb(245, 112, 130);
    text-decoration: none;
    margin-left: auto;
`
export const BackgroundOpaqueEffect = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0,0,0,0.4);
`