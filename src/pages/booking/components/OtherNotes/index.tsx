import { OTHER_NOTES } from "@pages/booking/constants";
import {
    OtherNotesContainer,
    OtherNotesList,
    OtherNotesListDesc,
    OtherNotesListLabel,
    OtherNotesTitle,
} from "../MHeader/OtherNotes.styles";

export function OtherNotes() {
    return (
        <OtherNotesContainer>
            <OtherNotesTitle>Other notes:</OtherNotesTitle>
            <OtherNotesList>
                {OTHER_NOTES.map(info => (
                    <li>
                        <OtherNotesListLabel>{info.label}</OtherNotesListLabel>&nbsp;
                        <OtherNotesListDesc>{info.description}</OtherNotesListDesc>
                    </li>
                ))}
            </OtherNotesList>
        </OtherNotesContainer>
    );
}
