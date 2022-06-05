import Link from "next/link";
import {
    Container,
    Direitos, 
    Instagram, 
    LogoFae, 
    Text,
    Dados
} from "./style";
import { BsInstagram } from "react-icons/bs";
export function Footer() {
    return (
        <Container>
            <Text>
                <Dados>
                    <LogoFae><img src="/images/logo-fae.png" alt="FAE" /></LogoFae>
                    <Link href="https://www.instagram.com/projetobobnelson/"><Instagram className="instagram"><BsInstagram />@projetobobnelson</Instagram></Link>
                </Dados>
                <Direitos>
                    Todos os direitos reservados
                </Direitos>
            </Text>
        </Container>
    );
}