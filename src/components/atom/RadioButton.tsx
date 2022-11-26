import { ChangeEvent, memo, useState } from "react";
import styled from "styled-components";

const values = [
    { id: 1, item: "赤", itemid: "red" },
    { id: 2, item: "青", itemid: "blue" },
    { id: 3, item: "黃", itemid: "yellow" }
]

export const RadioButton = memo(() => {
    const [color, checkColor] = useState("");

    const onChangeCheckd = (e: ChangeEvent<HTMLInputElement>) => checkColor(e.target.value)

    return (
        <>
            <h3>現在選択されている色：{color}</h3>
            <SRadioButton>
                {values.map((value) => (
                    <>
                        <label htmlFor={value.itemid}>
                            <input
                                key={value.id}
                                type="radio"
                                value={value.item}
                                id={value.itemid}
                                name="radio"
                                onChange={onChangeCheckd}
                            />
                            {value.item}</label>
                    </>
                ))}
            </SRadioButton>
        </>
    );
})
const SRadioButton = styled.div`
    display: block;
`