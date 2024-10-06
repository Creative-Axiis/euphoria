import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export const Section3Style = {
    height: "fit-content",
    width: "200px", // need to use 1440px
    // position: "fixed",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    margin: 0, // Remove all margins
    boxSizing: "border-box", // Include padding and border in element's width and height
    // padding: "32px 16px 32px 16px",
    marginTop: "24px",
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
        backgroundColor: "#5654D4", // Light background on hover
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

export default function Section3() {
    const [openSection, setOpenSection] = useState<string | null>(null); // Tracks which section is open
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    // Toggle specific section dropdown
    const handleClick = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    // Icons for normal and hover (white version)
    const icons = {
        dropdown: {
            default: "/icons/sideBar/dropdown.svg",
            white: "/icons/sideBar/dropdown_white.svg",
        },
    };

    return (
        <Box sx={Section3Style}>
            <Stack direction="column" spacing={0}>
                <Box width={"200px"} height={"29px"}>
                    <Typography sx={Section1HeaderStyle}>Pages</Typography>
                </Box>
                {/*landing page Button */}
                <Box
                    sx={ItemStyle}
                    onClick={() => handleClick("landing_page")}
                    onMouseEnter={() => setHoveredItem("landing_page")}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Box
                        sx={{
                            ...ItemIconStyle,
                            transform:
                                openSection === "landing_page"
                                    ? "rotate(90deg)"
                                    : "rotate(0deg)",
                            transition: "transform 0.3s",
                        }}
                        component="img"
                        src={
                            hoveredItem === "landing_page"
                                ? icons.dropdown.white
                                : icons.dropdown.default
                        }
                        alt="icon"
                    />
                    <Typography sx={ItemTextStyle}>Landing Page</Typography>
                </Box>
                {/* Landing Page Dropdown Items */}
                <Collapse
                    in={openSection === "landing_page"}
                    timeout="auto"
                    unmountOnExit
                >
                    <Stack direction="column" spacing={0}>
                        <Box sx={ItemStyle}>
                            <Typography sx={ItemTextStyle}>Test 1</Typography>
                        </Box>
                        <Box sx={ItemStyle}>
                            <Typography sx={ItemTextStyle}>Test 2</Typography>
                        </Box>
                        <Box sx={ItemStyle}>
                            <Typography sx={ItemTextStyle}>Test 3</Typography>
                        </Box>
                    </Stack>
                </Collapse>
                {/* Authentication Button */}
                <Box
                    sx={ItemStyle}
                    onClick={() => handleClick("authentication")}
                    onMouseEnter={() => setHoveredItem("authentication")}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Box
                        sx={{
                            ...ItemIconStyle,
                            transform:
                                openSection === "authentication"
                                    ? "rotate(90deg)"
                                    : "rotate(0deg)",
                            transition: "transform 0.3s",
                        }}
                        component="img"
                        src={
                            hoveredItem === "authentication"
                                ? icons.dropdown.white
                                : icons.dropdown.default
                        }
                        alt="icon"
                    />
                    <Typography sx={ItemTextStyle}>Authentication</Typography>
                </Box>
                {/* Authentication Dropdown Items */}
                <Collapse
                    in={openSection === "authentication"}
                    timeout="auto"
                    unmountOnExit
                >
                    <Stack direction="column" spacing={0}>
                        <Box sx={ItemStyle}>
                            <Typography sx={ItemTextStyle}>Test 1</Typography>
                        </Box>
                        <Box sx={ItemStyle}>
                            <Typography sx={ItemTextStyle}>Test 2</Typography>
                        </Box>
                        <Box sx={ItemStyle}>
                            <Typography sx={ItemTextStyle}>Test 3</Typography>
                        </Box>
                    </Stack>
                </Collapse>
                {/* Error Button */}
                <Box
                    sx={ItemStyle}
                    onClick={() => handleClick("error")}
                    onMouseEnter={() => setHoveredItem("error")}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Box
                        sx={{
                            ...ItemIconStyle,
                            transform:
                                openSection === "error"
                                    ? "rotate(90deg)"
                                    : "rotate(0deg)",
                            transition: "transform 0.3s",
                        }}
                        component="img"
                        src={
                            hoveredItem === "error"
                                ? icons.dropdown.white
                                : icons.dropdown.default
                        }
                        alt="icon"
                    />
                    <Typography sx={ItemTextStyle}>Error</Typography>
                </Box>
                {/* Error Dropdown Items */}
                <Collapse
                    in={openSection === "error"}
                    timeout="auto"
                    unmountOnExit
                >
                    <Stack direction="column" spacing={0}>
                        <Box sx={ItemStyle}>
                            <Typography sx={ItemTextStyle}>Test 1</Typography>
                        </Box>
                        <Box sx={ItemStyle}>
                            <Typography sx={ItemTextStyle}>Test 2</Typography>
                        </Box>
                        <Box sx={ItemStyle}>
                            <Typography sx={ItemTextStyle}>Test 3</Typography>
                        </Box>
                    </Stack>
                </Collapse>
                {/* Pricing Button */}
                <Box
                    sx={ItemStyle}
                    onClick={() => handleClick("pricing")}
                    onMouseEnter={() => setHoveredItem("pricing")}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Box
                        sx={{
                            ...ItemIconStyle,
                            transform:
                                openSection === "pricing"
                                    ? "rotate(90deg)"
                                    : "rotate(0deg)",
                            transition: "transform 0.3s",
                        }}
                        component="img"
                        src={
                            hoveredItem === "pricing"
                                ? icons.dropdown.white
                                : icons.dropdown.default
                        }
                        alt="icon"
                    />
                    <Typography sx={ItemTextStyle}>Pricing</Typography>
                </Box>
                {/* Pricing Dropdown Items */}
                <Collapse
                    in={openSection === "pricing"}
                    timeout="auto"
                    unmountOnExit
                >
                    <Stack direction="column" spacing={0}>
                        <Box sx={ItemStyle}>
                            <Typography sx={ItemTextStyle}>Test 1</Typography>
                        </Box>
                        <Box sx={ItemStyle}>
                            <Typography sx={ItemTextStyle}>Test 2</Typography>
                        </Box>
                        <Box sx={ItemStyle}>
                            <Typography sx={ItemTextStyle}>Test 3</Typography>
                        </Box>
                    </Stack>
                </Collapse>
            </Stack>
        </Box>
    );
}
