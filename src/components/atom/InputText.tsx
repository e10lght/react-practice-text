import { ChangeEvent, useState } from "react";
import styled from "styled-components"


export const InputText = () => {


    const [text, setText] = useState("");

    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
        console.log(text);
    }
    return (
        <SInput>
            <input
                type="text"
                onChange={onChangeText}
            />
        </SInput>

    );
}

const SInput = styled.div`
    display: block;
`