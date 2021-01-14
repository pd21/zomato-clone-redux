import styled from 'styled-components'

export const CardContainer = styled.div`
    display: flex;
    margin-top: 30px;
    flex-wrap: wrap;
    width: 100%;
`

export const CardItemContainer = styled.div`
    width: 267px;
    height: 320px;
    margin: 0px 10.5px 10px 0px;
    background-image: url(${props => props.imgUrl});
    background-size: cover;
    position: relative;
    border-radius: 8px;

    &:last-child{
        margin: 0px 0px 10px 0px;
    }
`
export const CardOpaqueEffect = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
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
`
