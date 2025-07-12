import { BookingRowWrapper, BookingLabel, BookingValueWrapper, BookingValueText } from "../styles";

export const BookingRow = ({
    label,
    value,
    bold,
    color,
    compact,
    medcompact,
    small,
}: {
    label: React.ReactNode;
    value: React.ReactNode;
    bold?: boolean;
    color?: string;
    compact?: boolean;
    medcompact?: boolean;
    small?: boolean;
}) => (
    <BookingRowWrapper compact={compact} medcompact={medcompact}>
        <BookingLabel small={small}>{label}</BookingLabel>
        <BookingValueWrapper>
            <BookingValueText bold={bold} color={color} small={small}>
                {value}
            </BookingValueText>
        </BookingValueWrapper>
    </BookingRowWrapper>
);
