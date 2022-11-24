import { FC, useState } from "react";
import styled from "styled-components"
import { PrimaryButton } from "./atom/PrimaryButton";

export const LikeButton: FC = (props) => {
    const [liked, setLiked] = useState<boolean>(false);

    const onClick = () => {
        setLiked(!liked);
        console.log(liked);
    }

    return (
        <PrimaryButton
            onClickButton={onClick}
            liked={liked}
        >{liked ? "いいね済み" : "いいねする"}</PrimaryButton>
    );
}

const SButton = styled.button`

`