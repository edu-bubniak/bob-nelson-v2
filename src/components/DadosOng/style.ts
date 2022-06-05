import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 1rem;
    background-color: ${props => props.theme.colors.secondary};
    padding: 1rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`

export const Image = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1000px) {
        img {
            width: 200px;
            height: 200px;
            object-fit: contain;
            margin-bottom: 20px;
        }
    }
`
export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        padding: 1rem;
        width: 300px;
        border-radius: 4px;
        height: 3rem;
        color: ${props => props.theme.colors.titleLight};
        margin-bottom: 15px;
        transition: 0.3s;

        &:hover {
            filter: brightness(0.9);
        }
    }

    .instagram{
        background: #f09433; 
        background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
        background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
        background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );

        svg {
            font-size: 1.4rem;
            margin-right: 6px;
        }
    }

    .pix {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        width: 300px;
        border-radius: 4px;
        height: 3rem;
        color: ${props => props.theme.colors.text};
        border: 3px dashed ${props => props.theme.colors.secondary};
        background-color: ${props => props.theme.colors.background};
        margin-bottom: 15px;
    }
`