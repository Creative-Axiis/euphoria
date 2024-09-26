import { Stack } from "@mui/material";
import Box from "@mui/material/Box";

export const Section3Style = {
    height: "fit-content",
    width: "200px", // need to use 1440px
    backgroundColor: "green",
    // position: "fixed",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    margin: 0, // Remove all margins
    boxSizing: "border-box", // Include padding and border in element's width and height
    // padding: "32px 16px 32px 16px",
    marginTop: "24px",
    alignment: "left",
};

export default function Section3() {
    return (
        <Box sx={Section3Style}>
            <Stack direction="column" spacing={2}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
            </Stack>
        </Box>
    );
}
