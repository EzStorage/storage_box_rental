import CheckIcon from "@components/Icons/CheckIcon";
import { CustomCheckboxContainer, CustomCheckboxFormControl } from "./CustomCheckbox.styles";

interface CustomCheckboxProps {
    label: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    checked?: boolean;
}

export function CustomCheckbox({ label, onChange, checked = false }: CustomCheckboxProps) {
    return (
        <CustomCheckboxFormControl
            control={
                <CustomCheckboxContainer
                    defaultChecked={checked}
                    onChange={onChange}
                    checkedIcon={<CheckIcon />}
                />
            }
            label={label}
        />
    );
}
