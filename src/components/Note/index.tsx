import { ReactNode } from "react";
import { NoteContainer, NoteContent, NoteIcon, NoteRow, NoteTitle } from "./Note.styles";

export enum NoteVariantsEnum {
    INFO = "info",
    TRANSPARENT = "transparent",
}

type NoteProps = {
    Icon?: ReactNode;
    title?: string;
    children?: ReactNode;
    variant?: NoteVariantsEnum;
};

export function Note({ Icon, title, children, variant = NoteVariantsEnum.INFO }: NoteProps) {
    return (
        <NoteContainer variant={variant}>
            <NoteRow isTitle={!!title}>
                {Icon && <NoteIcon isTitle={!!title}>{Icon}</NoteIcon>}
                {!!title ? <NoteTitle>{title}</NoteTitle> : <NoteContent>{children}</NoteContent>}
            </NoteRow>
            {!!title && <NoteContent>{children}</NoteContent>}
        </NoteContainer>
    );
}
