import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 1rem;
    background-color: ${props => props.theme.colors.background};
`

export const ContainerText = styled.div`
    width: 100%;
    padding: 1rem;
    max-width: 1200px;
    margin: 1rem auto;
    color: ${props => props.theme.colors.text};
`

export const Title = styled.div`
    width: 200px;
    padding: 0 0 0.5rem 0;
    border-bottom: 2px solid ${props => props.theme.colors.text};
    margin-bottom: 1rem;

    h2 {
        color: ${props => props.theme.colors.text};
    }
`

export const ContainerTopicos = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1200px) {
        flex-direction: column;
    }
`

export const Topicos = styled.div`
    width: 50%;

    li {
        list-style:none;
        font-size: 1.2rem;
        margin: 1rem 0;

        svg {
            color: ${props => props.theme.colors.primary};
            margin-right: 10px;
        }
    }

    @media (max-width: 1200px) {
        width: 100%;
        margin-bottom: 20px;
    }
`

export const Imagem = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 250px;
        height: 250px;
        object-fit: contain;
        border-radius: 175px;
        -webkit-box-shadow: 0px 0px 15px -2px #000000; 
        box-shadow: 0px 0px 15px -2px #000000; 
        margin-right: 30px;
    }    

    @media (max-width: 768px) {
        width: 100%;
    }
`