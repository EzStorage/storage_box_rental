import { OTHER_NOTES } from "@pages/BookingFlow/constants";
import {
    OtherNotesContainer,
    OtherNotesList,
    OtherNotesListDesc,
    OtherNotesListLabel,
    OtherNotesTitle,
} from "./OtherNotes.styles";

export function OtherNotes() {
    return (
        <OtherNotesContainer>
            <OtherNotesTitle>Other notes:</OtherNotesTitle>
            <OtherNotesList>
                {OTHER_NOTES.map(info => (
                    <li key={info.label}>
                        <OtherNotesListLabel>{info.label}:</OtherNotesListLabel>
                        <OtherNotesListDesc>{info.description}</OtherNotesListDesc>
                    </li>
                ))}
            </OtherNotesList>
        </OtherNotesContainer>
    );
}
