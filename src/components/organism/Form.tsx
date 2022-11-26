import { PrimaryButton } from "../atom/PrimaryButton";
import { InputText } from "../atom/InputText";
import styled from "styled-components";
import { useState } from "react";
import { InputTextButton } from "../molecules/InputTextButton";
import { SelectBox } from "../atom/SelectBox";
import { RadioButton } from "../atom/RadioButton";
import { CheckBox } from "../atom/CheckBox";

export const Form = () => {
    const [title, setTitle] = useState("React")
    const [language, setLanguage] = useState("HTML")
    const [text, setText] = useState("");
    const [checkedValue, setCheckedValue] = useState([""])

    const onClicktitle = () => setTitle(text);

    return (
        <SForm>
            <h1>I love{title}</h1>
            <InputTextButton
                onClickTitle={onClicktitle}
                text={text}
                setText={setText}
            />
            <h3>現在選択されている言語：{language}</h3>
            <SelectBox setLanguage={setLanguage} />
            <RadioButton />
            <h3>現在選択されている値：{checkedValue.join()}</h3>
            <CheckBox
                setCheckedValue={setCheckedValue}
                checkedValue={checkedValue}
            />
        </SForm>
    );
}

const SForm = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`