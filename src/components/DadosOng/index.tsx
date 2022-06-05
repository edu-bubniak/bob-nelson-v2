import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { useTheme } from "styled-components";
import { Container, Image, Buttons } from "./style";

interface DadosOngProps {
    id: string;
}

export function DadosOng({id}: DadosOngProps) {
    const theme = useTheme();
    return (
        <Container id={id}>
            <Image>
                <img src="/images/dog.png" alt="dog"/>
            </Image>
            <Buttons>
                <Link href="https://apoia.se/associacaogfa">
                    <button style={{backgroundColor: theme.colors.primary}}>Clique aqui para ajudar!</button>
                </Link>
                <Link href="https://www.instagram.com/associacaogfa/">
                    <button className="instagram"><BsInstagram /> Instagram</button>
                </Link>
                <div className="pix">PIX: 29.682.985/0001-64</div>
            </Buttons>
        </Container>
    );
}