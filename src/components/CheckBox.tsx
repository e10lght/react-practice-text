import { FC, memo, useEffect, useState } from "react";

type Props = {
    value: string;
    isFirst: boolean;
    id: string
}

export const CheckBox: FC<Props> = memo((props) => {
    const { value, isFirst, id } = props;
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(isFirst);
    },[])

    const onChangeValue = () => {
        setChecked(!checked);
    }

    return (
        <>
            <input
                type="checkbox"
                id={id}
                name="check1"
                checked={checked}
                onChange={onChangeValue}
            />
            <label
                htmlFor={id}
            >{value}</label>
        </>
    );
})