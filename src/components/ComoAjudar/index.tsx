import { FaPaw } from "react-icons/fa";
import { Container, ContainerText, ContainerTopicos, Imagem, Title, Topicos } from "./style";

interface ComoAjudarProps {
    id: string;
}

export function ComoAjudar({id}: ComoAjudarProps) {
    return (
        <Container id={id}>
            <ContainerText>
                <Title>
                    <h2>Como ajudar?</h2>
                </Title>
                <h4>Você pode ajudar doando:</h4>
                <ContainerTopicos>
                    <Topicos>
                        <ul>
                            <li><FaPaw /> Ração</li>
                            <li><FaPaw /> Dinheiro para a ONG Força Animal</li>
                            <li><FaPaw /> Caminhas e casinhas</li>
                            <li><FaPaw /> Medicamentos de animais e de humanos aplicável a eles</li>
                            <li><FaPaw /> Cobertinhas e roupinhas</li>
                            <li><FaPaw /> Material clínico (compressas, algodão, álcool, água oxigenada, etc)</li>
                        </ul>
                    </Topicos>
                    <Imagem>
                        <img src="/images/logo-forca-animal.png" />
                    </Imagem>
                </ContainerTopicos>
            </ContainerText>
        </Container>
    );
}