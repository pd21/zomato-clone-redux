import styled from 'styled-components'

export const CardContainer = styled.div`
    display: flex;
    margin-top: 30px;
    flex-wrap: wrap;
    width: 100%;

   @media (max-width: 480px){
        justify-content: space-around;
    }
`

export const CardItemContainer = styled.div`
    width: 267px;
    height: 320px;
    margin: 0px 7.5px 20px 0px;
    background-image: url(${props => props.imgUrl});
    background-size: cover;
    position: relative;
    border-radius: 8px;
    cursor: pointer;

    &:last-child {
        margin: 0px 0px 20px 0px;
    }

    @media (max-width: 480px){
        width: 48%;
        margin-right:0px;
    }
`
export const CardOpaqueEffect = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 8px;
    background: rgba(0,0,0,0.5);
`
export const CardTitle = styled.div`
    color: rgb(255, 255, 255);
    margin: 0 10px;
    bottom: 20px;
    position: absolute;
    line-height: 1.5;
    white-space: nowrap;
    font-size: 20px;
    font-weight: 300;
    font-family: Okra,Helvetica,sans-serif;

    @media (max-width: 480px){
      font-size: 12px;
   }
`
