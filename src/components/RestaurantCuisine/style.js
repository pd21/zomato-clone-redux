import styled from 'styled-components'

export const MainCuisine = styled.div` 
`

export const CuisineContent = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding: 70px 0;

    @media (max-width: 480px){
      padding:30px 0;
    }
`
export const Banner = styled.div`
    position: relative;
    background-image: url('https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/01/31/14/table.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    max-width: 100%;
    height: 320px;
    border-radius: 5px;

    @media (max-width: 480px){
      border-radius: 0px;
    }
`
export const SectionRestaurants = styled.div`
    margin-top: 55px;
    @media (max-width: 480px){
      margin-top: 35px;
    }
`
export const Section = styled.div`
    bottom: 0px;
    position: absolute;
    color: #fff;
    padding:0 20px;
    font-family: 'Bodoni Moda', serif;
`
export const Title = styled.div`
    font-size: 52px;;
    line-height: 1.2;
    font-weight: 500;
`

export const NumberOfRestaurants = styled.div`
    margin-top:13px;
    margin-bottom: 30px;
    font-size:18px;
    font-family: 'Bodoni Moda', serif;
    font-weight: 550;
`
