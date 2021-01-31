import styled from 'styled-components'

export const RestaurantContent = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding: 40px 0px;
`
export const MainContent = styled.div`
    background: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
`

export const RestaurantImage = styled.div`
    height: 470px;
    width: 100%;
    background-image: url('${props => props.imageUrl}');
    background-size: cover;
    background-position: center 50%;

`
export const RestaurantTitle = styled.div`
    line-height: 1.2;
    color: ${props => props.theme.mode === 'dark'?'rgba(255,255,255,0.7)':'rgb(28,28,28)'};
    margin-top: 10px;
    font-weight: 600;
    font-size: 36px;
    font-family: 'Bodoni Moda', serif;

    @media (max-width: 480px){
      font-size: 20px;
    }
`
export const Locality = styled.div`
    font-size: 16px;
    color: rgb(156, 156, 156);
    margin: 10px 0px;
    font-weight: 500;
`
export const Timing = styled.div`
    font-weight: 500;
`
export const Opening = styled.span`
    color: rgb(244, 162, 102);
    font-size: 14px;
    line-height: 1.5;
    margin-right: 5px;
`
export const Time = styled.span`
    color: rgb(130, 130, 130);
    font-size: 14px;
    line-height: 1.5;
`
export const SectionOverview = styled.div`
  display: flex;
  font-size: 18px;

    @media (max-width: 480px){
      font-size: 16px;
    }
`

export const Section = styled.section`
    position: sticky;
    border-bottom: 2px solid rgb(237, 90, 107,0.2); 
    top:0px;
    background: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
    cursor: pointer;
    font-weight: 600;
    font-family: 'Questrial', sans-serif;

    @media (max-width: 480px){
      padding-left:10px;
      padding-right: 10px;
    }
`
export const RestaurantReview = styled.div`
    padding: 20px;
    cursor: pointer;
    color: ${props => props.active ? `rgb(237, 90, 107)` : `rgb(105, 105, 105);`};
`

export const Overview = styled.div`
    padding: 20px;
    margin-right: 20px;
    color: ${props => !props.active ? `rgb(237, 90, 107)` :`rgb(105, 105, 105);`};
    
`
export const AboutRestaurant = styled.div`
    margin-top: 20px;
    margin-bottom: 80px;
    font-family: 'Questrial', sans-serif;

    @media (max-width: 480px){
      padding-left:10px;
      padding-right: 10px;
      margin-bottom: 40px;
    }
`
export const AboutTitle = styled.div`
    line-height: 1.2;
    color: rgb(28, 28, 28);
    font-size: 24px;
    font-weight: 600;
    font-family: 'Bodoni Moda', serif;
    color: ${props => props.theme.mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgb(28,28,28)'};

    @media (max-width: 480px){
      font-size: 20px;
    }
`
export const Title = styled.div`
    line-height: 1.2;
    font-weight: 400;
     color: ${props => props.theme.mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgb(28,28,28)'};
    font-size: 22px;
    margin-top: 20px;
    font-family: 'Questrial', sans-serif;
    font-weight: 550;

    @media (max-width: 480px){
      font-size: 18px;
    }
`
export const Cuisine = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
`
export const CuisineItem = styled.div`
    width: 100px;
    height: 36px;
    color: rgb(17, 145, 153);
    border: 1px solid rgb(130, 130, 130);
    font-size: 15px;
    line-height: 1.2;
    padding: 8px;
    margin-right: 10px;
    border-radius: 59px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 480px){
      margin-bottom: 5px;
    }
`
export const AverageCost = styled.div`
    margin-top: 10px;
    font-size: 16px;
    line-height: 1.5;
    color: rgb(79, 79, 79);
`
export const Highlights = styled.div`
    width: 720px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;

     @media (max-width: 480px){
      width: 100%;
    }
`
export const HighlightInfoItem = styled.div`
    flex: 50%;
    font-size: 16px;
    line-height: 1.5;
    color: rgb(79, 79, 79);
    margin-bottom: 10px;
`
export const InfoIcon = styled.i`
    margin-right : 10px;
    color: rgb(245,112,130);
`
export const Subtitle = styled.div`
    margin-top: 10px;
    font-size: 16px;
    line-height: 1.5;
    color: rgb(79, 79, 79);
   
`
export const Sub = styled.div`
    width: 300px;
    display: inline-block;
`
export const AddressContent = styled.div`
    margin-top: 10px;
    font-size: 16px;
    line-height: 1.5;
    color: rgb(79, 79, 79);
`

export const Pin = styled.div`
    margin-top: 5px;
`

export const Address = styled.div`
    
`