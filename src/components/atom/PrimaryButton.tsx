import { Children, FC } from "react";
import styled from "styled-components"

type Props = {
    children: string;
    onClickButton: () => void;
    liked: boolean;
}

export const PrimaryButton: FC<Props> = (props) => {
    const { children, onClickButton, liked } = props;

    return (
        <SButton
            onClick={onClickButton}
            style={
                {
                    background: liked ? "#f91880" : "#71767b"
                }
            }
        >
            {children}
        </SButton>
    );
}

const SButton = styled.button`
    display: block;
    color: white;
    border-radius: 3px;
    border: none;
    box-shadow: 0 0 0 2px;
    ext-decoration: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin: 0;
`