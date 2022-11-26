import { ChangeEvent, Dispatch, FC, memo, useEffect, useState } from "react";
import styled from "styled-components";

type Props = {
    setCheckedValue: Dispatch<React.SetStateAction<string[]>>;
    checkedValue: string[];
}

const values = [
    { id: 1, item: "マウス", name: "check1", checked: true },
    { id: 2, item: "モニター", name: "check2", checked: false },
    { id: 3, item: "キーボード", name: "check3", checked: true }
]

export const CheckBox: FC<Props> = memo((props) => {
    const { setCheckedValue, checkedValue } = props;

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setCheckedValue([])
    }, [])

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.checked
            ? setCheckedValue([...checkedValue,e.target.value])
            : setCheckedValue(checkedValue.filter((elm)=> elm !== e.target.value))
        setChecked(!checked);
    }

    return (

        <SCheckBox>
            {values.map((value) => (
                <>
                    <input
                        key={value.id}
                        type="checkbox"
                        id={value.name}
                        name={value.name}
                        value={value.item}
                        onChange={onChangeValue}
                    />
                    <label
                        htmlFor={value.name}
                    >{value.item}</label>
                </>
            ))}
        </SCheckBox>
    );
})

const SCheckBox = styled.div`
    display: block;
`