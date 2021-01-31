import styled from 'styled-components'

export const CardRating = styled.i`
    color: ${ props => props.active ? `rgb(245,112,130)` : `rgba(0,0,0,0.1)`}
`