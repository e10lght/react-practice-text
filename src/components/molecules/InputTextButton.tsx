import { PrimaryButton } from "../atom/PrimaryButton";
import { InputText } from "../atom/InputText";
import styled from "styled-components";
import { Dispatch, FC, SetStateAction, useState } from "react";

type Props = {
    placeholder?: string;
    onClickTitle?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    text: string;
    setText?: Dispatch<SetStateAction<string>>;
}

export const InputTextButton: FC<Props> = (props) => {
    const { placeholder, onClickTitle, text, setText } = props;

    return (
        <SInputTextButton>
            <InputText
                placeholder={placeholder}
                text={text}
                setText={setText}
            />
            <PrimaryButton onClickButton={onClickTitle}>入力</PrimaryButton>
        </SInputTextButton>
    );
}

const SInputTextButton = styled.div`
    display: flex;
    align-items: center;
`