import { Box } from "@mui/material";

export function ApplePay() {
    const methodData = [
        {
            supportedMethods: "https://apple.com/apple-pay/",
            data: {
                version: 12,
                merchantIdentifier: "merchant.com.example.superstore",
                merchantCapabilities: ["supports3DS", "supportsCredit", "supportsDebit"],
                supportedNetworks: ["visa", "masterCard", "amex", "discover", "interac", "maestro"],
                countryCode: "GB",
                currencyCode: "GBP",
            },
        },
    ];

    const details = {
        id: "super-store-order-123-12312",
        displayItems: [
            {
                label: "Sub-total",
                amount: { currency: "GBP", value: "55.00" },
            },
            {
                label: "Value-Added Tax (VAT)",
                amount: { currency: "GBP", value: "5.00" },
            },
        ],
        total: {
            label: "Total due",
            // The total is GBP£65.00 here because we need to
            // add shipping (below). The selected shipping
            // costs GBP£5.00.
            amount: { currency: "GBP", value: "65.00" },
        },
        shippingOptions: [
            {
                id: "standard",
                // Shipping by truck, 2 days
                label: "🚛  Envío por camión (2 dias)",
                amount: { currency: "EUR", value: "5.00" },
                selected: true,
            },
            {
                id: "drone",
                // Drone shipping, 2 hours
                label: "🚀 Drone Express (2 horas)",
                amount: { currency: "EUR", value: "25.00" },
            },
        ],
    };

    const options = {
        requestPayerEmail: false,
        requestPayerName: true,
        requestPayerPhone: false,
        requestShipping: true,
    };

    // async function validateResponse(response: any) {
    //     try {
    //         const errors = await checkAllValuesAreGood(response);
    //         if (errors.length) {
    //             await response.retry(errors);
    //             return validateResponse(response);
    //         }
    //         await response.complete("success");
    //     } catch (err) {
    //         // Something went wrong...
    //         await response.complete("fail");
    //     }
    // }

    const onPay = async () => {
        try {
            const request = new PaymentRequest(methodData, details, options);
            // See below for a detailed example of handling these events
            request.onshippingaddresschange = ev => ev.updateWith(details);
            request.onshippingoptionchange = ev => ev.updateWith(details);
            const response = await request.show();
            // await validateResponse(response);
        } catch (err) {
            // AbortError, SecurityError
            console.error(err);
        }
    };

    const fetchClientSecret = () => {
        return fetch("/create-checkout-session", { method: "POST" })
            .then(response => response.json())
            .then(json => json.checkoutSessionClientSecret);
    };

    return (
        <Box
            height={"100vh"}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <button onClick={onPay}>Pay</button>
        </Box>
    );
}
