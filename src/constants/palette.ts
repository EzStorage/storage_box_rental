export const SURFACE = {
    PRIMARY_MED: "#EF151E",
    PRIMARY_HIGH: "#CD0F28",
    PRIMARY_BASE: "#FFF2EC",
    INFO: "#F0F5FF",
    GREY_SURFACE_0: "#FFFFFF",
    GREY_SURFACE_1: "#F9F9FA",
    GREY_SURFACE_2: "#F4F4F6",
    DISABLED_BASE: "#F4F4F6",
    DISABLED_LOW: "#EBECF0",
    BLACK: "#000000",
    PRIMARY_DARK: "#cc0000",
    GREEN: "#458116",
};

export const OUTLINE = {
    PRIMARY_MED: "#FA8371",
    GREY_LOW: "#EBECF0",
    GREY_BASE: "#F4F4F6",
    GREY_MED: "#DDDFE4",
    GREY_LIGHT: "#C3C6CC",
};

export const TEXT_CUSTOM = {
    PRIMARY_MED: "#5B616D",
    PRIMARY_HIGH: "#CD0F28",
    INFO: "#1943C1",
    SUCCESS: "#458116",
    DANGER: "#CE2E02",
    GREY_LOW: "#8C929C",
    GREY_BASE: "#C3C6CC",
    GREY_HIGH: "#0A0C11",
    WHITE: "#FFFFFF",
};

export type SurfaceColorKey = keyof typeof SURFACE;
export type OutlineColorKey = keyof typeof OUTLINE;
export type TextCustomColorKey = keyof typeof TEXT_CUSTOM;

export type SurfaceColorValue = (typeof SURFACE)[SurfaceColorKey];
export type OutlineColorValue = (typeof OUTLINE)[OutlineColorKey];
export type TextCustomColorValue = (typeof TEXT_CUSTOM)[TextCustomColorKey];
