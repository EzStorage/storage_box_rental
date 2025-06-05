import { ReactNode } from "react";
import { NoteContainer, NoteContent, NoteRow } from "./Note.styles";

type NoteProps = {
    Icon?: ReactNode;
    title?: string;
    children?: ReactNode;
};

export function Note({ Icon, title, children }: NoteProps) {
    return (
        <NoteContainer>
            <NoteRow isTitle={!!title}>
                {Icon && <div>{Icon}</div>}
                {!!title ? <p>{title}</p> : <NoteContent>{children}</NoteContent>}
            </NoteRow>
            {!!title && <NoteContent>{children}</NoteContent>}
        </NoteContainer>
    );
}
