import styled from 'styled-components'

export const CollectionContainer = styled.div`
    margin-top: 60px;
    margin-bottom: 60px;

    @media (max-width: 480px){
      margin-left:10px;
      margin-right: 10px;
    }
`
export const CollectionTitle = styled.div`
    font-size: 36px;
    line-height: 1.2;
    font-weight: 500;
    color: rgb(28, 28, 28);
    font-family: 'Questrial', sans-serif;

    @media (max-width: 480px){
      font-size: 22px;
    }
`
export const CollectionSubtitleContainer = styled.div`
    display: flex;
    margin-top: 4px;
    line-height: 1.4;
    font-weight: 400;
    color: rgb(54, 54, 54);
    font-size: 18px;
    font-family: 'Questrial', sans-serif;

    @media (max-width: 480px){
      flex-direction: column;
    }
`
export const CollectionSubtitle = styled.div`
    text-transform: capitalize;

    @media (max-width: 480px){
      font-size: 12px;
    }
`
export const AllCollectionTitle = styled.a`
    color: rgb(245, 112, 130);
    text-decoration: none;
    margin-left: auto;
    text-transform: capitalize;
    font-family: 'Questrial', sans-serif;

    @media (max-width: 480px){
      margin: 0;
      font-size: 16px;
      margin-top:5px;
    }
`