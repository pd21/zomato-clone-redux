import styled from 'styled-components'

export const LoaderContent = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border:3px solid rgb(245,112,130); ;
    border-top-color: #fff;
    animation: 1s spin infinite ease-in-out;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    trnsform: transition(-50%,-50%);

    @keyframes spin{
    to{
        transform: rotate(360deg);
    }
}
`

