import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 1rem;
    max-width: 1200px;
    margin: 1rem auto;
`

export const ContainerQuemSomos = styled.div`
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
`

export const Title = styled.div`
    width: 200px;
    padding: 0 0 0.5rem 0;
    border-bottom: 2px solid ${props => props.theme.colors.titleLight};
    color: ${props => props.theme.colors.titleLight};
    margin-bottom: 1rem;
`

export const Card = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    -webkit-box-shadow: 0px 0px 15px -2px #000000; 
    box-shadow: 0px 0px 15px -2px #000000;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.background};

    @media(max-width: 768px) {
        flex-direction: column;
    }
`

export const CardImagem = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;

    @media(max-width: 768px) {
        width: 100%;
    }
    
    img{ 
        width: 100%;
        height: 90%;
        object-fit: cover;
    }

`
export const CardTexto = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    font-size: 1.2rem;
    padding: 5rem;

    p {
        margin-bottom: 25px;
    }

    img {
        width: 350px;
        height: 100px;
        object-fit: contain;
    }

    @media(max-width: 768px) {
        font-size: 1.2rem;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
`