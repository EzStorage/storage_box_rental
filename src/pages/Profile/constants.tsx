import DocumentIcon from "@components/Icons/DocumentIcon";
import FAQIcon from "@components/Icons/FAQIcon";
import WhatsAppIcon from "@components/Icons/WhatsAppIcon";

import type React from "react";

export type MenuItemTypes = { id: string; label: string; Icon: React.ComponentType<any> };

export type MenuSectionTypes = {
    title: string;
    items: MenuItemTypes[];
};

export const MENU_SECTIONS: MenuSectionTypes[] = [
    {
        title: "Help Center",
        items: [
            { id: "whatsapp", label: "WhatsApp", Icon: WhatsAppIcon },
            { id: "faqs", label: "FAQs", Icon: FAQIcon },
        ],
    },
    {
        title: "Policy",
        items: [
            { id: "privacy", label: "Privacy Policy", Icon: DocumentIcon },
            { id: "terms", label: "Term of use", Icon: DocumentIcon },
        ],
    },
];
