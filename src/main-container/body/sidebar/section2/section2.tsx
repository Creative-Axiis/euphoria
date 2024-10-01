import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export const Section2Style = {
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
    fontFamily: "Inter",
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

export default function Section2() {
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
        <Box sx={Section2Style}>
            <Stack direction="column" spacing={0}>
                <Box width={"200px"} height={"29px"}>
                    <Typography sx={Section1HeaderStyle}>Apps</Typography>
                </Box>

                {/* E-commerce Button */}
                <Box
                    sx={ItemStyle}
                    onClick={() => handleClick("ecommerce")}
                    onMouseEnter={() => setHoveredItem("ecommerce")}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Box
                        sx={{
                            ...ItemIconStyle,
                            transform:
                                openSection === "ecommerce"
                                    ? "rotate(90deg)"
                                    : "rotate(0deg)",
                            transition: "transform 0.3s",
                        }}
                        component="img"
                        src={
                            hoveredItem === "ecommerce"
                                ? icons.dropdown.white
                                : icons.dropdown.default
                        }
                        alt="icon"
                    />
                    <Typography sx={ItemTextStyle}>E-commerce</Typography>
                </Box>
                {/* E-commerce Dropdown Items */}
                <Collapse
                    in={openSection === "ecommerce"}
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

                {/* CRM Button */}
                <Box
                    sx={ItemStyle}
                    onClick={() => handleClick("crm")}
                    onMouseEnter={() => setHoveredItem("crm")}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Box
                        sx={{
                            ...ItemIconStyle,
                            transform:
                                openSection === "crm"
                                    ? "rotate(90deg)"
                                    : "rotate(0deg)",
                            transition: "transform 0.3s",
                        }}
                        component="img"
                        src={
                            hoveredItem === "crm"
                                ? icons.dropdown.white
                                : icons.dropdown.default
                        }
                        alt="icon"
                    />
                    <Typography sx={ItemTextStyle}>CRM</Typography>
                </Box>
                {/* CRM Dropdown Items */}
                <Collapse
                    in={openSection === "crm"}
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
                {/* Project Management Button */}
                <Box
                    sx={ItemStyle}
                    onClick={() => handleClick("project_management")}
                    onMouseEnter={() => setHoveredItem("project_management")}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Box
                        sx={{
                            ...ItemIconStyle,
                            transform:
                                openSection === "project_management"
                                    ? "rotate(90deg)"
                                    : "rotate(0deg)",
                            transition: "transform 0.3s",
                        }}
                        component="img"
                        src={
                            hoveredItem === "project_management"
                                ? icons.dropdown.white
                                : icons.dropdown.default
                        }
                        alt="icon"
                    />
                    <Typography sx={ItemTextStyle}>
                        Project Management
                    </Typography>
                </Box>
                {/* Project Management Dropdown Items */}
                <Collapse
                    in={openSection === "project_management"}
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
                {/* Booking Button */}
                <Box
                    sx={ItemStyle}
                    onClick={() => handleClick("booking")}
                    onMouseEnter={() => setHoveredItem("booking")}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Box
                        sx={{
                            ...ItemIconStyle,
                            transform:
                                openSection === "booking"
                                    ? "rotate(90deg)"
                                    : "rotate(0deg)",
                            transition: "transform 0.3s",
                        }}
                        component="img"
                        src={
                            hoveredItem === "booking"
                                ? icons.dropdown.white
                                : icons.dropdown.default
                        }
                        alt="icon"
                    />
                    <Typography sx={ItemTextStyle}>Booking</Typography>
                </Box>
                {/* Booking Dropdown Items */}
                <Collapse
                    in={openSection === "booking"}
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
                {/* Kanban Button */}
                <Box
                    sx={ItemStyle}
                    onClick={() => handleClick("kanban")}
                    onMouseEnter={() => setHoveredItem("kanban")}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Box
                        sx={{
                            ...ItemIconStyle,
                            transform:
                                openSection === "kanban"
                                    ? "rotate(90deg)"
                                    : "rotate(0deg)",
                            transition: "transform 0.3s",
                        }}
                        component="img"
                        src={
                            hoveredItem === "kanban"
                                ? icons.dropdown.white
                                : icons.dropdown.default
                        }
                        alt="icon"
                    />
                    <Typography sx={ItemTextStyle}>Kanban</Typography>
                </Box>
                {/* Kanban Dropdown Items */}
                <Collapse
                    in={openSection === "kanban"}
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
                {/* Chat Button */}
                <Box
                    sx={ItemStyle}
                    onClick={() => handleClick("chat")}
                    onMouseEnter={() => setHoveredItem("chat")}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Box
                        sx={{
                            ...ItemIconStyle,
                            transform:
                                openSection === "chat"
                                    ? "rotate(90deg)"
                                    : "rotate(0deg)",
                            transition: "transform 0.3s",
                        }}
                        component="img"
                        src={
                            hoveredItem === "chat"
                                ? icons.dropdown.white
                                : icons.dropdown.default
                        }
                        alt="icon"
                    />
                    <Typography sx={ItemTextStyle}>Chat</Typography>
                </Box>
                {/* Chat Dropdown Items */}
                <Collapse
                    in={openSection === "chat"}
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
                {/* event Button */}
                <Box
                    sx={ItemStyle}
                    onClick={() => handleClick("event")}
                    onMouseEnter={() => setHoveredItem("event")}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Box
                        sx={{
                            ...ItemIconStyle,
                            transform:
                                openSection === "event"
                                    ? "rotate(90deg)"
                                    : "rotate(0deg)",
                            transition: "transform 0.3s",
                        }}
                        component="img"
                        src={
                            hoveredItem === "event"
                                ? icons.dropdown.white
                                : icons.dropdown.default
                        }
                        alt="icon"
                    />
                    <Typography sx={ItemTextStyle}>Event</Typography>
                </Box>
                {/* event Dropdown Items */}
                <Collapse
                    in={openSection === "event"}
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
                {/* social Button */}
                <Box
                    sx={ItemStyle}
                    onClick={() => handleClick("social")}
                    onMouseEnter={() => setHoveredItem("social")}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Box
                        sx={{
                            ...ItemIconStyle,
                            transform:
                                openSection === "social"
                                    ? "rotate(90deg)"
                                    : "rotate(0deg)",
                            transition: "transform 0.3s",
                        }}
                        component="img"
                        src={
                            hoveredItem === "social"
                                ? icons.dropdown.white
                                : icons.dropdown.default
                        }
                        alt="icon"
                    />
                    <Typography sx={ItemTextStyle}>Social</Typography>
                </Box>
                {/* social Dropdown Items */}
                <Collapse
                    in={openSection === "social"}
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
                {/* calendar Button */}
                <Box
                    sx={ItemStyle}
                    onClick={() => handleClick("calendar")}
                    onMouseEnter={() => setHoveredItem("calendar")}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Box
                        sx={{
                            ...ItemIconStyle,
                            transform:
                                openSection === "calendar"
                                    ? "rotate(90deg)"
                                    : "rotate(0deg)",
                            transition: "transform 0.3s",
                        }}
                        component="img"
                        src={
                            hoveredItem === "calendar"
                                ? icons.dropdown.white
                                : icons.dropdown.default
                        }
                        alt="icon"
                    />
                    <Typography sx={ItemTextStyle}>Calendar</Typography>
                </Box>
                {/* calendar Dropdown Items */}
                <Collapse
                    in={openSection === "calendar"}
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
