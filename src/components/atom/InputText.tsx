import { ChangeEvent, Dispatch, FC, memo, SetStateAction, useState } from "react";

type Props = {
    placeholder?: string;
    setTitle?: Dispatch<SetStateAction<string>>;
}

export const InputText: FC<Props> = memo((props) => {
    const { placeholder, setTitle } = props;
    const [text, setText] = useState("");

    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
        setTitle?.(e.target.value)
    }
    return (
            <input
                type="text"
                placeholder={placeholder || "入力してください"}
                onChange={onChangeText}
            />
    );
})