import {
    CardRating
} from './style'

export const getRating = (vote) => {
    var rate = []
    const rating = Math.floor(vote)
    for (let i = 0; i < rating; i++) {
        rate.push(<CardRating className="fa fa-star" active></CardRating>)
    }

    if ((5 - rating) > 0) {
        for (let i = 0; i < (5 - rating); i++) {
            rate.push(<CardRating className="fa fa-star" ></CardRating>)
        }
    }    

    return rate
}