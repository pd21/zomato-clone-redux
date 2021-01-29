
import styled from 'styled-components'

export const Main = styled.div``

export const Title = styled.div`
    margin-bottom: 40px;
    text-align: center;
    color: ${props => props.theme.PRIMARY_TEXT_COLOR};
    font-size: 36px;
    line-height: 1.2;
    font-weight: 400;
    font-family: Okra,Helvetica,sans-serif;
    font-family: 'Questrial', sans-serif;

    @media (max-width: 480px){
      font-size: 20px;
    }
`

export const EstablishmentContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-bottom: 100px;

    @media (max-width: 480px){
      justify-content: center;
    }
`
export const EstablishmentItemContainer = styled.div`
    width: 353px;
    height: 66px;
    padding: 20px 24px;
    border-radius: 0.8px;
    margin-bottom: 15px;
    background: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
    border: 1px solid rgb(232, 232, 232);
    margin-right: 10px;
    cursor: pointer;
    font-family: 'Questrial', sans-serif;
    font-size: 18px;
    color: ${props => props.theme.TEXT_COLOR };

    @media (max-width: 480px){
      height: 54px;
      width:100%;
      margin-right:15px;
      margin-left:15px;
    }
`
