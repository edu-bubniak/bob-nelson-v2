import Link from "next/link";
import { Container, Logo, Nav, NavItem } from "./style";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";

export function Header() {
    return (
        <Container>
            <Logo>
                <LinkScroll to="header">
                    <Link href="/">
                        <img src="/images/logo.png" />
                    </Link>
                </LinkScroll>
            </Logo>
            <Nav>
                <LinkScroll
                    activeClass="selected"
                    to="header"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <NavItem selected={true}>Home</NavItem>
                </LinkScroll>
                <LinkScroll
                    activeClass="selected"
                    to="quem-somos"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <NavItem>Quem somos</NavItem>
                </LinkScroll>
                <LinkScroll
                    activeClass="selected"
                    to="como-ajudar"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <NavItem>Como ajudar</NavItem>
                </LinkScroll>
            </Nav>
        </Container>
    );
}