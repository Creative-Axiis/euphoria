import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";

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
        backgroundColor: "#5654D4", // Light background on hover
        cursor: "pointer", // Pointer cursor on hover
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow on hover
    },
    "&:active": {
        backgroundColor: "#5654D4", // Darker background on click
        transform: "scale(0.98)", // Slight "press" effect
        boxShadow: "none", // Remove shadow on click
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
export default function Section1() {
    return (
        <Box sx={Section1Style}>
            <Stack direction="column" spacing={0}>
                <Box width={"200px"} height={"29px"}>
                    <Typography sx={Section1HeaderStyle}>Dashboard</Typography>
                </Box>
                <Box sx={ItemStyle}>
                    <Box
                        sx={ItemIconStyle}
                        component="img"
                        src="analytics.svg"
                        alt="icon"
                    />

                    <Typography sx={ItemTextStyle}>Analytics</Typography>
                </Box>
                <Box sx={ItemStyle}>
                    <Box
                        sx={ItemIconStyle}
                        component="img"
                        src="analytics.svg"
                        alt="icon"
                    />

                    <Typography sx={ItemTextStyle}>Analytics</Typography>
                </Box>
                <Box sx={ItemStyle}>
                    <Box
                        sx={ItemIconStyle}
                        component="img"
                        src="analytics.svg"
                        alt="icon"
                    />

                    <Typography sx={ItemTextStyle}>Analytics</Typography>
                </Box>
                <Box sx={ItemStyle}>
                    <Box
                        sx={ItemIconStyle}
                        component="img"
                        src="analytics.svg"
                        alt="icon"
                    />

                    <Typography sx={ItemTextStyle}>Analytics</Typography>
                </Box>
                <Box sx={ItemStyle}>
                    <Box
                        sx={ItemIconStyle}
                        component="img"
                        src="analytics.svg"
                        alt="icon"
                    />

                    <Typography sx={ItemTextStyle}>Analytics</Typography>
                </Box>
                <Box sx={ItemStyle}>
                    <Box
                        sx={ItemIconStyle}
                        component="img"
                        src="analytics.svg"
                        alt="icon"
                    />

                    <Typography sx={ItemTextStyle}>Analytics</Typography>
                </Box>
                <Box sx={ItemStyle}>
                    <Box
                        sx={ItemIconStyle}
                        component="img"
                        src="analytics.svg"
                        alt="icon"
                    />

                    <Typography sx={ItemTextStyle}>Analytics</Typography>
                </Box>
                <Box sx={ItemStyle}>
                    <Box
                        sx={ItemIconStyle}
                        component="img"
                        src="analytics.svg"
                        alt="icon"
                    />

                    <Typography sx={ItemTextStyle}>Analytics</Typography>
                </Box>
            </Stack>
        </Box>
    );
}
