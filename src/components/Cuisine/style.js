
import styled from 'styled-components'

export const Main = styled.div``

export const Title = styled.div`
    margin-bottom: 40px;
    text-align: center;
    color: rgb(54, 54, 54);
    font-size: 36px;
    line-height: 1.2;
    font-weight: 400;
    font-family: Okra,Helvetica,sans-serif;
    font-family: 'Questrial', sans-serif;
`

export const EstablishmentContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-bottom: 100px;
`
export const EstablishmentItemContainer = styled.div`
    width: 353px;
    height: 66px;
    padding: 20px 24px;
    border-radius: 0.8px;
    margin-bottom: 15px;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(232, 232, 232);
    margin-right: 18px;
    cursor: pointer;
    font-family: 'Questrial', sans-serif;
    font-size: 18px;

    &:nth-child(3n){
        margin-right: 0px;
    }
`
