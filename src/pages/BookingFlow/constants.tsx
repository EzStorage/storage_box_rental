import { TimeType } from "./context";

export const OTHER_NOTES = [
    {
        label: "Flexible item retrieval",
        description:
            "Request a return anytime within your plan and send items back to storage when needed.",
    },
    {
        label: "Secure facility",
        description: "Your items are stored in a restricted-access facility for maximum security.",
    },
    {
        label: "Refund policy",
        description:
            "If you cancel after box delivery, you'll receive a refund excluding delivery fees.",
    },
    {
        label: "Security deposit",
        description: "Refunded at the end of your subscription.",
    },
    {
        label: "Automatic plan adjustment",
        description:
            "If your storage exceeds the selected plan size, you'll be upgraded automatically.",
    },
];

interface TimeSlot {
    id: string;
    time: string;
}

interface DeliveryOption {
    id: TimeType;
    name: string;
    price: string;
    description?: string;
}

export const TIME_TYPE_OPTIONS: DeliveryOption[] = [
    {
        id: "6HourSlot",
        name: "6 - Hour slot",
        price: "From S$5.99",
    },
    {
        id: "express",
        name: "Express",
        price: "From S$5.99 + S$5.99",
    },
];

export const SIX_HOUR_TIME_SLOTS: TimeSlot[] = [
    { id: "8am-2pm", time: "8am - 2pm" },
    { id: "2pm-8pm", time: "2pm - 8pm" },
];

export const EXPRESS_TIME_SLOTS: TimeSlot[] = [
    { id: "8am-10am", time: "8am - 10am" },
    { id: "10am-12pm", time: "10am - 12pm" },
    { id: "12pm-2pm", time: "12pm - 2pm" },
    { id: "2pm-4pm", time: "2pm - 4pm" },
    { id: "4pm-6pm", time: "4pm - 6pm" },
    { id: "6pm-8pm", time: "6pm - 8pm" },
];

export const DURATION_PLANS = [
    { id: "1W", title: "1 week", days: 7, price: 35.0 },
    { id: "2W", title: "2 weeks", days: 14, price: 35.0 },
    { id: "1M", title: "1 month", days: 30, price: 95.0 },
    { id: "3M", title: "3 months", days: 90, price: 285.0 },
    { id: "6M", title: "6 months", days: 180, price: 570.0 },
    { id: "12M", title: "12 months", days: 360, price: 1140.0 },
];
