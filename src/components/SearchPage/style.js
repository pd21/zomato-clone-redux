import styled from 'styled-components'

export const MainSearch = styled.div`
    background: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
`

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
    color: ${props => props.theme.TEXT_COLOR};
    font-family: 'Questrial', sans-serif;

    @media (max-width: 480px){
        margin: 0px 10px;
        font-size: 20px;
    }
`
export const Subtitle = styled.div`
    font-size: 20px;
    color: ${props => props.theme.SECONDARY_TEXT_COLOR};
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