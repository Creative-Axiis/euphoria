import Box from "@mui/material/Box";

export const ContentContainerStyle = {
    height: "944px",
    width: "100%", // need to use 1440px
    // backgroundColor: "blue",
    // position: "fixed",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    margin: 0, // Remove all margins
    boxSizing: "border-box", // Include padding and border in element's width and height
    padding: "24px 24px 24px 24px",
    alignment: "left",
};

export default function ContentContainer() {
    return <Box sx={ContentContainerStyle}></Box>;
}
