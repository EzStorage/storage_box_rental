export function formatAmount(
    amount: number,
    currency: string = "SGD",
    locale: string = "en-US",
): string {
    const options: Intl.NumberFormatOptions = {
        style: "currency",
        currency,
    };

    const formatAmountStr = Intl.NumberFormat(locale, options).format(amount);
    if (currency === "SGD") {
        return formatAmountStr.replace("SGD", "S$").replace(" ", "");
    }
    return formatAmountStr;
}
