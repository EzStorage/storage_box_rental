import { Interval, intervalToDuration } from "date-fns";

/**
 * Formats the duration between two dates into a readable string.
 * Example: "2 months 5 days left"
 */
export function formatDurationText(interval: Interval): string {
    const duration = intervalToDuration(interval);

    const parts = [];

    if (duration.months && duration.months > 0) {
        parts.push(`${duration.months} month${duration.months !== 1 ? "s" : ""}`);
    }

    if (duration.days !== undefined) {
        parts.push(`${duration.days} day${duration.days !== 1 ? "s" : ""}`);
    }

    return parts.join(" ") + " left";
}
