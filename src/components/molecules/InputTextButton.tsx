import { PrimaryButton } from "../atom/PrimaryButton";
import { InputText } from "../atom/InputText";
import styled from "styled-components";
import { Dispatch, FC, SetStateAction, useState } from "react";

type Props = {
    placeholder?: string;
    setTitle?: Dispatch<SetStateAction<string>>;
}

export const InputTextButton: FC<Props> = (props) => {
    const { setTitle, placeholder } = props;

    return (
        <SInputTextButton>
            <InputText placeholder={placeholder} setTitle={setTitle} />
            <PrimaryButton>入力</PrimaryButton>
        </SInputTextButton>
    );
}

const SInputTextButton = styled.div`
    display: flex;
    align-items: center;
`