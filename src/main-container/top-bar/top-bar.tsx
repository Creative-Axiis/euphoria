import Box from "@mui/material/Box";
export const TopBarStyles = {
    border: "1px solid #EBEDF3",
    height: "80px",
    width: "100%", // need to use 1440px
    // backgroundColor: "white",
    // position: "fixed",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    margin: 0, // Remove all margins
    boxSizing: "border-box", // Include padding and border in element's width and height
};
export default function HeaderComponent() {
    return (
        <Box sx={HeaderStyles}>
            <LeftSide />
            <RightSide />
        </Box>
    );
}
