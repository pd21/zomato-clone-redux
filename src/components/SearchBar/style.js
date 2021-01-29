import styled from 'styled-components'

export const MainSearch = styled.div`
    margin: 30px 0;
    width: 774px;
    height: 54px;
    background: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
    color: rgba(0,0,0,0.7);
    padding: 10px;
    border-radius: 10px;
    display: flex;

    @media (max-width: 480px){
        width: 320px;
        height: 47px;
    }
`
export const CitySearch = styled.input`
    border: none;
    outline: none;
    height: 34px;
    width: 220px;
    font-size: 14px;
    font-family: 'Questrial', sans-serif;
    color: ${props => props.theme.TEXT_COLOR};
    background: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};

    @media (max-width: 480px){
        width: 80px;
        height: 34px;
        font-size: 12px;
    }
`
export const RestaurantSearch = styled.input`
    border: none;
    outline: none;
    font-size: 14px;
    font-family: 'Questrial', sans-serif;
    color: ${props => props.theme.TEXT_COLOR};
    width: 480px;
    height: 34px;
    background: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};

    @media (max-width: 480px){
        width: 180px;
        height: 34px;
        font-size: 12px;
    }
`
export const City = styled.div`
    height: 34px;   
    border-right: 1px solid rgba(0,0,0,0.2);
    margin-right: 10px;

    @media (max-width: 480px){
        margin-right: 0px;
    }
`

export const LocationIcon = styled.i`
    color: rgb(245,112,130);
    margin-right: 10px;
    font-size: 20px;
    vertical-align: middle;

     @media (max-width: 480px){
        margin-right: 4px;
    }
`
export const SearchIcon = styled.i`
    vertical-align: middle;
    line-height: 34px;
    cursor: pointer;
    color: ${props => props.theme.ICON_COLOR}
`
export const Restaurant = styled.div`
    height: 34px; 
`