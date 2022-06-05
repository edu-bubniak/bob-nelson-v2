import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 500px;
    background-image: url("/images/footer.png");
    background-color: ${props => props.theme.colors.secondary};
`

export const Text = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
`
export const Dados = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
`

export const LogoFae = styled.div``


export const Instagram = styled.button`
    color: ${props => props.theme.colors.titleLight};
    padding: 0.5rem;
    border-radius: 4px;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    border: 0;

    svg {
        margin-right: 15px;
    }

    &:hover {
        filter: brightness(0.9);
    }
`

export const Direitos = styled.div`
    margin-top: 15px;
    color: ${props => props.theme.colors.titleLight};
    font-size: 1rem;
    font-weight: bold;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.2rem;
    background-color: ${props => props.theme.colors.navbar};
`