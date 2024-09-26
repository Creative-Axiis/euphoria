import Box from "@mui/material/Box";
import Section1 from "./section1/section1";
import Section2 from "./section2/section2";
import Section3 from "./section3/section3";
import { Stack } from "@mui/material";

export const SidebarStyle = {
    height: "944px",
    width: "232px", // need to use 1440px
    // position: "fixed",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    margin: 0, // Remove all margins
    boxSizing: "border-box", // Include padding and border in element's width and height
    padding: "32px 16px 32px 16px",
    alignment: "left",
};

export default function SideBar() {
    return (
        <Box sx={SidebarStyle}>
            <Stack direction="column" spacing={2}>
                <Section1 />
                <Section2 />
                <Section3 />
            </Stack>
        </Box>
    );
}
