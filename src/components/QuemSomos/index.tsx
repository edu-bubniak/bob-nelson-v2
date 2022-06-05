import { Container, Title, Card, CardImagem, CardTexto, ContainerQuemSomos} from "./style";

interface QuemSomosProps {
    id: string;
}

export function QuemSomos({id}: QuemSomosProps) {
    return (
        <ContainerQuemSomos id={id}>
            <Container>
                <Title>
                    <h2>Quem somos?</h2>
                </Title>
                <Card>
                    <CardImagem>
                        <img src="/images/grupo.jpeg" />
                    </CardImagem>
                    <CardTexto>
                        <p>Somos um grupo de seis jovens que cursamos direito na FAE,
                        montamos o projeto para poder ajudar a ONG Força animal
                        a arrecadar recursos para ajudar os animais resgatados
                        e também de rua.
                        </p>
                        <img src="/images/logo-fae.png" alt="FAE" />
                    </CardTexto>
                </Card>
            </Container>
        </ContainerQuemSomos>
    );
}