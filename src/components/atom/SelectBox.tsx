import { ChangeEvent, Dispatch, FC, memo, SetStateAction } from "react";

type Props = {
    setLanguage?: Dispatch<SetStateAction<string>>
}

const values: any = [
    { id: 1, item: "HTML" },
    { id: 2, item: "CSS" },
    { id: 3, item: "JavaScript" },
    { id: 4, item: "PHP" }
];

export const SelectBox: FC<Props> = memo((props) => {
    const { setLanguage } = props;

    const onChangeSelect = (e: any) => {
        setLanguage?.(e.target.value)
    }

    return (
        <select onChange={onChangeSelect}>
            {values.map((value: any) =>
            (
                <option
                    key={value.id}
                    value={value.item}
                >
                    {value.item}
                </option>
            )
            )}
        </select>
    );
})