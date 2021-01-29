import styled from 'styled-components'

export const Main = styled.div`
    margin-top: 20px;

    @media (max-width: 480px){
      padding-left: 10px;
      padding-right: 10px;
    }
`
export const Name = styled.div`
    line-height: 1.2;
    color: rgb(28, 28, 28);
    margin: 0px;
    font-size: 24px;
    font-weight: 600;
    font-family: 'Bodoni Moda', serif;

    @media (max-width: 480px){
      font-size: 20px;
    }
`
export const Subtitle = styled.div`
    margin-top: 10px;
    font-size: 18px;
    margin-bottom: 40px;
    line-height: 1.5;
    color: rgb(54, 54, 54);
    font-family: 'Questrial', sans-serif;
`
export const UserReviewContent = styled.div`
    border-bottom: 1px solid rgba(0,0,0,0.1);
    margin-bottom: 20px;
`
export const UserProfileContent = styled.div`
    display: flex;
`
export const UserProfilePicture = styled.div`
    background-image: url('${props => props.imageUrl}');
    width: 44px;
    height: 44px;
    background-size: cover;
    border-radius: 50%;
`
export const UserName = styled.div`
    line-height: 44px;
    margin-left: 10px;
    color: rgb(54, 54, 54);
    font-family: 'Questrial', sans-serif;
`
export const Star = styled.div`
    display: flex;
    margin:18px 0 10px 0;
`
export const Rating = styled.div`
    margin-right: 10px;
    color: rgb(54, 54, 54);
    font-size: 16px;
`

export const ReviewTime = styled.div`
    font-size: 14px;
    line-height: 1.5;
    color: rgb(156, 156, 156);
`
export const Text = styled.div`
    line-height: 1.8;
    margin: 5px 0px 20px;
    color: rgb(105, 105, 105);
    overflow-wrap: break-word;
    font-size: 16px;
    font-family: 'Questrial', sans-serif;
`

export const RatingStars = styled.div`
    margin-right: 10px;
`