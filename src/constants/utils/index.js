
export const getRating = (vote) => {
    var rate = []
    const rating = Math.floor(vote)
    for (let i = 0; i < rating; i++) {
        rate.push(<i className="fa fa-star" active></i>)
    }

    return rate
}