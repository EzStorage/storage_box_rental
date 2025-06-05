import { ReactNode } from "react";
import { NoteContainer, NoteContent, NoteRow } from "./Note.styles";
import { CSSProperties } from "@mui/material";

type NoteProps = {
    Icon?: ReactNode;
    title?: string;
    children?: ReactNode;
};

export function Note({ Icon, title, children }: NoteProps) {
    return (
        <NoteContainer>
            <div>
                {!!title ? (
                    <>
                        <NoteRow isTitle={!!title}>
                            {Icon && <div>{Icon}</div>}
                            <p>{title}</p>
                        </NoteRow>
                        <NoteContent>{children}</NoteContent>
                    </>
                ) : (
                    <NoteRow isTitle={!!title}>
                        {Icon && <div>{Icon}</div>}
                        <NoteContent>{children}</NoteContent>
                    </NoteRow>
                )}
            </div>
        </NoteContainer>
    );
}
