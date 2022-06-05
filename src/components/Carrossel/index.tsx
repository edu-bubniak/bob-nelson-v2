import { RowContainer, ListArea, List, ArrowRight, ArrowLeft, ImageContainer, TextArea } from "./styles";
import { dadosCarrossel } from "./dadosCarrossel";
import React, { useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai"
import { useWindowSize } from "../../hooks/useWindowSize";

interface CarrosselProps {
    id: string;
}

export function Carrossel({id}: CarrosselProps) {
    const [scrollX, setScrollX] = useState(0);
    const [text, setText] = useState(0);
    const windowSize = useWindowSize();

    function handleLeftArrow() {
        let x = scrollX + Math.round(window.innerWidth);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x);

        if((text - 1) >= 0) {
            setText(text - 1);
        }
    }

    function handleRightArrow() {
        let x = scrollX - Math.round(window.innerWidth);
        
        let listW = dadosCarrossel.length * (windowSize.width ?? 1400);
        
        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW);
        }
        setScrollX(x);

        if((text + 1) < dadosCarrossel.length) {
            setText(text + 1);
        }
    }


    return (
        <RowContainer id={id}>
            <ArrowRight onClick={handleRightArrow}>
                <AiOutlineRight style={{fontSize:20}}/>
            </ArrowRight>

            <ArrowLeft onClick={handleLeftArrow}>
                <AiOutlineLeft style={{fontSize:20}}/>
            </ArrowLeft>

            <TextArea>
                <h1>Projeto BobNelson</h1>
                <p>{dadosCarrossel[text].texto}</p>
            </TextArea>

            <ListArea>
                <List style={{
                    width: 1400 * dadosCarrossel.length,
                    marginLeft: scrollX
                }}>
                { dadosCarrossel.map((carrossel, key) => {
                    return <ImageContainer key={key}>
                        <img src={carrossel.imagem} alt={carrossel.texto} />
                    </ImageContainer>
                }) }
                </List>
            </ListArea> 
        </RowContainer>
    );
}