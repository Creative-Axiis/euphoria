import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";

export const Section1Style = {
    height: "fit-content",
    width: "200px", // need to use 1440px
    // backgroundColor: "green",
    // position: "fixed",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    margin: 0, // Remove all margins
    boxSizing: "border-box", // Include padding and border in element's width and height
    // padding: "32px 16px 32px 16px",
};
export const ItemStyle = {
    width: "200px", // need to use 1440px
    height: "32px",
    padding: "8px 8px 8px 8px",
    // backgroundColor: "green",
    // position: "fixed",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    margin: 0, // Remove all margins
    boxSizing: "border-box", // Include padding and border in element's width and height
    //alignment: "center-left",
    // alignItems: "center",
    alignment: "left",

    // Hover & Click effect Start
    borderRadius: "8px", // Rounded corners
    transition: "background-color 0.3s, transform 0.1s, box-shadow 0.3s", // Smooth transition with shadow effect
    "&:hover": {
        backgroundColor: "primary.main", // Light background on hover
        cursor: "pointer", // Pointer cursor on hover
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow on hover
        "& .MuiTypography-root": {
            color: "#FFFFFF", // White color
        },
    },
    "&:active": {
        backgroundColor: "#5654D4", // Darker background on click
        transform: "scale(0.98)", // Slight "press" effect
        boxShadow: "none", // Remove shadow on click
        "& .MuiTypography-root": {
            color: "#FFFFFF", // White color
        },
    },
    // Hover & Click effect End
};
export const ItemTextStyle = {
    // fontFamily: "Inter",
    fontStyle: "medium",
    paddingLeft: "8px",
    fontWeight: "500",
    fontSize: "13px",
    lineHeight: "16px",
    letterSpacing: "-0.01em",
    color: "#101318",
};
export const ItemIconStyle = {
    width: "14px",
    height: "14px",
};
export const Section1HeaderStyle = {
    padding: "8px",
    fontWeight: "600",
    fontSize: "11px",
    lineHeight: "13.31px",
    letterSpacing: "-0.01em",
    color: "#A1A1A1",
};
export default function Section1() {
    // Define state for which item is hovered
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    // Icons for normal and hover (white version)
    const icons = {
        analytics: {
            default: "/icons/sideBar/analytics.svg",
            white: "/icons/sideBar/analytics_white.svg",
        },
        ecommerce: {
            default: "/icons/sideBar/E-commerce_dark.svg",
            white: "/icons/sideBar/E-commerce_white.svg",
        },
        finance: {
            default: "/icons/sideBar/Finance.svg",
            white: "/icons/sideBar/Finance_white.svg",
        },
        stockMarket: {
            default: "/icons/sideBar/Stock-Market.svg",
            white: "/icons/sideBar/Stock-Market_white.svg",
        },
        crm: {
            default: "/icons/sideBar/CRM.svg",
            white: "/icons/sideBar/CRM_white.svg",
        },
        projectManagement: {
            default: "/icons/sideBar/Project-Management.svg",
            white: "/icons/sideBar/Project-Management_white.svg",
        },
        booking: {
            default: "/icons/sideBar/Booking.svg",
            white: "/icons/sideBar/Booking_white.svg",
        },
        crypto: {
            default: "/icons/sideBar/Crypto.svg",
            white: "/icons/sideBar/Crypto_white.svg",
        },
    };

    return (
        <Box sx={Section1Style}>
            <Stack direction="column" spacing={0}>
                <Box width={"200px"} height={"29px"}>
                    <Typography sx={Section1HeaderStyle}>Dashboard</Typography>
                </Box>
                {/** Analytics */}
                <Box
                    sx={ItemStyle}
                    onMouseEnter={() => setHoveredItem("analytics")}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Box
                        sx={ItemIconStyle}
                        component="img"
                        src={
                            hoveredItem === "analytics"
                                ? icons.analytics.white
                                : icons.analytics.default
                        }
                        alt="icon"
                    />
                    <Typography sx={ItemTextStyle}>Analytics</Typography>
                </Box>

                {/** E-commerce */}
                <Box
                    sx={ItemStyle}
                    onMouseEnter={() => setHoveredItem("ecommerce")}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Box
                        sx={ItemIconStyle}
                        component="img"
                        src={
                            hoveredItem === "ecommerce"
                                ? icons.ecommerce.white
                                : icons.ecommerce.default
                        }
                        alt="icon"
                    />
                    <Typography sx={ItemTextStyle}>E-commerce</Typography>
                </Box>

                {/** Finance */}
                <Box
                    sx={ItemStyle}
                    onMouseEnter={() => setHoveredItem("finance")}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Box
                        sx={ItemIconStyle}
                        component="img"
                        src={
                            hoveredItem === "finance"
                                ? icons.finance.white
                                : icons.finance.default
                        }
                        alt="icon"
                    />
                    <Typography sx={ItemTextStyle}>Finance</Typography>
                </Box>

                {/** Stock Market */}
                <Box
                    sx={ItemStyle}
                    onMouseEnter={() => setHoveredItem("stockMarket")}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Box
                        sx={ItemIconStyle}
                        component="img"
                        src={
                            hoveredItem === "stockMarket"
                                ? icons.stockMarket.white
                                : icons.stockMarket.default
                        }
                        alt="icon"
                    />
                    <Typography sx={ItemTextStyle}>Stock Market</Typography>
                </Box>

                {/** CRM */}
                <Box
                    sx={ItemStyle}
                    onMouseEnter={() => setHoveredItem("crm")}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Box
                        sx={ItemIconStyle}
                        component="img"
                        src={
                            hoveredItem === "crm"
                                ? icons.crm.white
                                : icons.crm.default
                        }
                        alt="icon"
                    />
                    <Typography sx={ItemTextStyle}>CRM</Typography>
                </Box>

                {/** Project Management */}
                <Box
                    sx={ItemStyle}
                    onMouseEnter={() => setHoveredItem("projectManagement")}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Box
                        sx={ItemIconStyle}
                        component="img"
                        src={
                            hoveredItem === "projectManagement"
                                ? icons.projectManagement.white
                                : icons.projectManagement.default
                        }
                        alt="icon"
                    />
                    <Typography sx={ItemTextStyle}>
                        Project Management
                    </Typography>
                </Box>

                {/** Booking */}
                <Box
                    sx={ItemStyle}
                    onMouseEnter={() => setHoveredItem("booking")}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Box
                        sx={ItemIconStyle}
                        component="img"
                        src={
                            hoveredItem === "booking"
                                ? icons.booking.white
                                : icons.booking.default
                        }
                        alt="icon"
                    />
                    <Typography sx={ItemTextStyle}>Booking</Typography>
                </Box>

                {/** Crypto */}
                <Box
                    sx={ItemStyle}
                    onMouseEnter={() => setHoveredItem("crypto")}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Box
                        sx={ItemIconStyle}
                        component="img"
                        src={
                            hoveredItem === "crypto"
                                ? icons.crypto.white
                                : icons.crypto.default
                        }
                        alt="icon"
                    />
                    <Typography sx={ItemTextStyle}>Crypto</Typography>
                </Box>
            </Stack>
        </Box>
    );
}
