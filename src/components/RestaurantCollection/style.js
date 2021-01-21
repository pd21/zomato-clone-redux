import styled from 'styled-components'

export const RestaurantCollectionContainer = styled.div`
`

export const CollectionListContainer = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding: 70px 0px;
`
export const BannerContainer = styled.div`
    position: relative;
    background-image: url('https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/01/31/14/table.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    max-width: 100%;
    height: 320px;
    border-radius: 5px;

`
export const BannerOpaqueEffect = styled.div`
    position: absolute;
    width:100%;
    height: 100%;
    background:rgba(0,0,0,0.4);
`
export const Section = styled.div`
    bottom: 0px;
    position: absolute;
    color: #fff;
    padding:0 20px;
`
export const BannerTitle = styled.div`
    font-size: 52px;;
    line-height: 1.2;
    font-weight: 500;
    font-family: 'Bodoni Moda', serif;
`
export const BannerDescription = styled.div`
    font-size: 22px;
    line-height: 1.5;
    font-family: 'Bodoni Moda', serif;
    font-weight: 550;
`
export const ResultsFound = styled.div`
    margin-top:13px;
    margin-bottom: 30px;
    font-size:18px;
    font-family: 'Bodoni Moda', serif;
    font-weight: 550;
`

export const SectionRestaurants = styled.div`
    margin-top: 55px;
`