import styled from "styled-components";

export const ListArea = styled.div`
    overflow-x: hidden;
    overflow-y: hidden;
    height: 700px;
`

export const List = styled.div`
   transition: all ease 0.5s;
`

export const ArrowRight = styled.div`
    position: absolute;
    width: 40px;
    height: 700px;
    background-color: rgba(54, 57, 63, 0.8);
    color: ${props => props.theme.colors.titleLight};
    cursor: pointer;

    right: 0;
    z-index: 998;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    &:hover {
        background-color: rgba(54, 57, 63, 1);
    }

    opacity: 0;
    transition: 0.2s;

    @media(max-width: 1200px) {
        opacity: 1;
        width: 30px;
        background-color: transparent;
        &:hover {
            background-color: rgba(54, 57, 63, 0.8);
        }
    }
`

export const ArrowLeft = styled.div`
    position: absolute;
    width: 40px;
    height: 700px;
    background-color: rgba(54, 57, 63, 0.8);
    color: ${props => props.theme.colors.titleLight};
    cursor: pointer;

    left: 0;
    z-index: 998;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    &:hover {
        background-color: rgba(54, 57, 63, 1);
    }

    opacity: 0;
    transition: 0.2s;


    @media(max-width: 1200px) {
        opacity: 1;
        width: 30px;
        background-color: transparent;
        &:hover {
            background-color: rgba(54, 57, 63, 0.8);
        }
    }
`

export const RowContainer = styled.div`
    h2 {
        margin: 0 0 1rem 3rem;
    }

    &:hover ${ArrowRight} {
        opacity: 1;
    }

    &:hover ${ArrowLeft} {
        opacity: 1;
    }
`

export const ImageContainer = styled.div`
    width: 1400px;
    height: 800px;
    display: inline-block;

    @media(max-width: 1200px) {
            width: 1200px;
        }

        @media(max-width: 768px) {
            width: 768px;
        }

        @media(max-width: 500px) {
            width: 500px;
    }

    img {
        display: inline-block;
        width: 1400px;
        height: 800px;
        object-fit: cover;

        @media(max-width: 1200px) {
            width: 1200px;
        }

        @media(max-width: 768px) {
            width: 768px;
        }

        @media(max-width: 500px) {
            width: 500px;
        }
    }
`

export const TextArea = styled.div`
    position: absolute;
    width: 1200px;
    height: 700px;
    background: rgba(0,0,0,0.2);
    background: linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.5) 23%, rgba(0,0,0,0.5) 70%, transparent 100%);
    color: ${props => props.theme.colors.titleLight};
    z-index: 998;
    left: 50%;
    transform: translate(-50%);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
        font-size: 2.1rem;
    }
    p {
        font-size: 1.5rem;
    }

    @media(max-width: 1200px) {
        width: 700px;
    }

    @media(max-width: 768px) {
        width: 300px;
        h1 {
            font-size: 1.5rem;
        }
        p {
            font-size: 1rem;
        }
    }
`