import { PrimaryButton } from "../atom/PrimaryButton";
import { InputText } from "../atom/InputText";
import styled from "styled-components";
import { useState } from "react";
import { InputTextButton } from "../molecules/InputTextButton";
import { SelectBox } from "../atom/SelectBox";

export const Form = () => {
    const [title, setTitle] = useState("React")
    const [language, setLanguage] = useState("HTML")

    return (
        <SForm>
            <h1>I love{title}</h1>
            <InputTextButton placeholder="h1要素が変化します" setTitle={setTitle} />
            <h3>現在選択されている言語：{language}</h3>
            <SelectBox setLanguage={setLanguage} />
            </SForm>
    );
}

const SForm = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`