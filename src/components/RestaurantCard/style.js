import styled from 'styled-components'

export const RestaurantCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    @media (max-width: 480px){
      justify-content: space-around;
    }
`

export const RestaurantContent = styled.div`
    width: 100%;
    height: 185px;
    background-image:url(${props => props.imageUrl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,0.2);

    &:nth-child(4n){
        margin-right: 0px;
    }
`
export const Main = styled.div`
    margin-right: 14px;
    margin-bottom: 30px;
    width: 261px;
    font-family: 'Questrial', sans-serif;

    @media (max-width: 480px){
      margin-right: 0px;
    }
`

export const Details = styled.div`
    margin-top:10px;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
    width: 200px;
`
export const Title = styled.a`
    text-decoration: none;
    white-space: nowrap;
    display: inline;
    font-size: 18px;
    line-height: 1.5;
    color: rgb(28, 28, 28);
    font-weight: 500;
`
export const Rating = styled.div`
    font-weight: 400;
    margin-top: 5px;
`
export const NumberOfRating = styled.span`
    font-size: 14px;
    margin:0 5px;
`

export const Locality = styled.div`
    margin: 5px 0px;
    font-size: 14px;
    color: rgb(79, 79, 79);
    line-height: 14px;
    font-weight: 400;
`
export const Cuisines = styled.div`
    font-size: 12px;
    color: rgb(79, 79, 79);
    line-height: 14px;
    font-weight: 400;
`
export const CardRating = styled.i`
    margin-right: 8px;
    color: rgb(237, 90, 107);
`