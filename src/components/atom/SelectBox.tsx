import { ChangeEvent, Dispatch, FC, memo, SetStateAction } from "react";

type Props = {
    setLanguage?: Dispatch<SetStateAction<string>>
}

export const SelectBox: FC<Props> = memo((props) => {
    const { setLanguage } = props;

    const onChangeSelect = (e: any) => {
        setLanguage?.(e.target.value)
    }

    return (
        <select onChange={onChangeSelect}>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
        </select>
    );
})