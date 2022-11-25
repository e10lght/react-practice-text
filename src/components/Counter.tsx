import { FC, memo, useState } from "react"
import styled from "styled-components"
import { PrimaryButton } from "./atom/PrimaryButton"

export const Counter: FC = memo(() => {
    const [count, setCount] = useState(0);

    const onClickIncrement = () => setCount(count + 1);
    const onClickDecrement = () => setCount(count - 1);
    const onClickReset = () => setCount(0);

    return (
        <>
            <p>現在のカウント数：{count}</p>
            <SCounter>
                <PrimaryButton onClickButton={onClickIncrement}>ボタン+1</PrimaryButton>
                <PrimaryButton onClickButton={onClickDecrement}>ボタン-1</PrimaryButton>
                <PrimaryButton onClickButton={onClickReset}>リセット</PrimaryButton>
            </SCounter>
        </>
    );
})

const SCounter = styled.div`
    display: flex;
`


