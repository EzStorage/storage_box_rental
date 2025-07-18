import {
    BookingRowWrapper,
    BookingLabel,
    BookingValueWrapper,
    BookingValueText,
} from "../styles";

interface BookingRowProps {
    label: React.ReactNode;
    value: React.ReactNode;
    bold?: boolean;
    color?: string;
    compact?: boolean;
    medcompact?: boolean;
    small?: boolean;
}

export const BookingRow = ({
    label,
    value,
    bold,
    color,
    compact,
    medcompact,
    small,
}: BookingRowProps) => (
    <BookingRowWrapper compact={compact} medcompact={medcompact}>
        <BookingLabel small={small}>{label}</BookingLabel>
        <BookingValueWrapper>
            <BookingValueText bold={bold} color={color} small={small}>
                {value}
            </BookingValueText>
        </BookingValueWrapper>
    </BookingRowWrapper>
);
