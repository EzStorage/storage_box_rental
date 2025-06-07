import { ReactNode } from "react";
import { NoteContainer, NoteContent, NoteIcon, NoteRow, NoteTitle } from "./Note.styles";

type NoteProps = {
    Icon?: ReactNode;
    title?: string;
    children?: ReactNode;
};

export function Note({ Icon, title, children }: NoteProps) {
    return (
        <NoteContainer>
            <NoteRow isTitle={!!title}>
                {Icon && <NoteIcon isTitle={!!title}>{Icon}</NoteIcon>}
                {!!title ? <NoteTitle>{title}</NoteTitle> : <NoteContent>{children}</NoteContent>}
            </NoteRow>
            {!!title && <NoteContent>{children}</NoteContent>}
        </NoteContainer>
    );
}
