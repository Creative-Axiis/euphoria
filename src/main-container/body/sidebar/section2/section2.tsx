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
    color: "#7A7A7A",
};

export default function Section2() {
    const [openEcommerce, setOpenEcommerce] = useState(false); // State to control dropdown

    // Toggle dropdown
    const handleClick = () => {
        setOpenEcommerce(!openEcommerce);
    };

    return (
        <Box sx={Section2Style}>
            <Stack direction="column" spacing={0}>
                <Box width={"200px"} height={"29px"}>
                    <Typography sx={Section1HeaderStyle}>Apps</Typography>
                </Box>
                {/* E-commerce Button */}
                <Box sx={ItemStyle} onClick={handleClick}>
                    <Box
                        sx={ItemIconStyle}
                        component="img"
                        src="dropdown.svg"
                        alt="icon"
                    />
                    <Typography sx={ItemTextStyle}>E-commerce</Typography>
                </Box>
                {/* E-commerce Dropdown Items */}
                <Collapse in={openEcommerce} timeout="auto" unmountOnExit>
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
                {/* E-commerce Button */}
                <Box sx={ItemStyle} onClick={handleClick}>
                    <Box
                        sx={ItemIconStyle}
                        component="img"
                        src="dropdown.svg"
                        alt="icon"
                    />
                    <Typography sx={ItemTextStyle}>CRM</Typography>
                </Box>
                {/* E-commerce Dropdown Items */}
                <Collapse in={openEcommerce} timeout="auto" unmountOnExit>
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
                {/* E-commerce Button */}
                <Box sx={ItemStyle} onClick={handleClick}>
                    <Box
                        sx={ItemIconStyle}
                        component="img"
                        src="dropdown.svg"
                        alt="icon"
                    />
                    <Typography sx={ItemTextStyle}>Project Management</Typography>
                </Box>
                {/* E-commerce Dropdown Items */}
                <Collapse in={openEcommerce} timeout="auto" unmountOnExit>
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
                {/* E-commerce Button */}
                <Box sx={ItemStyle} onClick={handleClick}>
                    <Box
                        sx={ItemIconStyle}
                        component="img"
                        src="dropdown.svg"
                        alt="icon"
                    />
                    <Typography sx={ItemTextStyle}>Booking</Typography>
                </Box>
                {/* E-commerce Dropdown Items */}
                <Collapse in={openEcommerce} timeout="auto" unmountOnExit>
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
                {/* E-commerce Button */}
                <Box sx={ItemStyle} onClick={handleClick}>
                    <Box
                        sx={ItemIconStyle}
                        component="img"
                        src="dropdown.svg"
                        alt="icon"
                    />
                    <Typography sx={ItemTextStyle}>Kanban</Typography>
                </Box>
                {/* E-commerce Dropdown Items */}
                <Collapse in={openEcommerce} timeout="auto" unmountOnExit>
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
                {/* E-commerce Button */}
                <Box sx={ItemStyle} onClick={handleClick}>
                    <Box
                        sx={ItemIconStyle}
                        component="img"
                        src="dropdown.svg"
                        alt="icon"
                    />
                    <Typography sx={ItemTextStyle}>Chat</Typography>
                </Box>
                {/* E-commerce Dropdown Items */}
                <Collapse in={openEcommerce} timeout="auto" unmountOnExit>
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
                {/* E-commerce Button */}
                <Box sx={ItemStyle} onClick={handleClick}>
                    <Box
                        sx={ItemIconStyle}
                        component="img"
                        src="dropdown.svg"
                        alt="icon"
                    />
                    <Typography sx={ItemTextStyle}>Event</Typography>
                </Box>
                {/* E-commerce Dropdown Items */}
                <Collapse in={openEcommerce} timeout="auto" unmountOnExit>
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
                {/* E-commerce Button */}
                <Box sx={ItemStyle} onClick={handleClick}>
                    <Box
                        sx={ItemIconStyle}
                        component="img"
                        src="dropdown.svg"
                        alt="icon"
                    />
                    <Typography sx={ItemTextStyle}>Social</Typography>
                </Box>
                {/* E-commerce Dropdown Items */}
                <Collapse in={openEcommerce} timeout="auto" unmountOnExit>
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
                {/* E-commerce Button */}
                <Box sx={ItemStyle} onClick={handleClick}>
                    <Box
                        sx={ItemIconStyle}
                        component="img"
                        src="dropdown.svg"
                        alt="icon"
                    />
                    <Typography sx={ItemTextStyle}>Calendar</Typography>
                </Box>
                {/* E-commerce Dropdown Items */}
                <Collapse in={openEcommerce} timeout="auto" unmountOnExit>
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
