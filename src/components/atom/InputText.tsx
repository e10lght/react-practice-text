import { ChangeEvent, Dispatch, FC, memo, SetStateAction, useState } from "react";

type Props = {
    placeholder?: string;
    text?: string;
    setText?: Dispatch<SetStateAction<string>>
}

export const InputText: FC<Props> = memo((props) => {
    const { placeholder, setText } = props;

    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        setText?.(e.target.value)
    }
    return (
            <input
                type="text"
                placeholder={placeholder || "入力してください"}
                onChange={onChangeText}
            />
    );
})