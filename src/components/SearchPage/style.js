import styled from 'styled-components'

export const MainSearch = styled.div``

export const SearchContent = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding: 70px 0px;

    @media (max-width: 480px){
       padding: 30px 0px;
    }

`
export const Title = styled.div`
    font-size: 32px;
    color: rgba(0,0,0,0.8);
    font-family: 'Questrial', sans-serif;

    @media (max-width: 480px){
        margin: 0px 10px;
        font-size: 20px;
    }
`
export const Subtitle = styled.div`
    font-size: 20px;
    color: rgba(0,0,0,0.4);
    font-family: 'Questrial', sans-serif;
    margin-top: 10px;

    @media (max-width: 480px){
        margin: 0px 10px;
        font-size: 14px;
    }
`
export const SectionRestaurants = styled.div`
    margin-top: 55px;

    @media (max-width: 480px){
        margin-top: 30px;
    }
`