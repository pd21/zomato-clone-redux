import styled from 'styled-components'

export const CardRating = styled.i`
    color: ${ props => props.active ? `rgb(237, 90, 107)` : `rgba(0,0,0,0.1)`}
`