import Box from "@mui/material/Box";
import Logo from "./logo/logo";
import RightBar from "./right-bar/right-bar";
import SearchContainer from "./search-container/search-container";

export const TopBarStyle = {
    background: "black",
    height: "80px",
    width: "100%", // need to use 1440px
    // backgroundColor: "white",
    // position: "fixed",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    margin: 0, // Remove all margins
    boxSizing: "border-box", // Include padding and border in element's width and height
    padding: "8px 24px 8px 24px",
};

export const MiddleBoxStyles = {
    flexGrow: 1,
    display: { xs: "none", md: "flex" },
};

export default function TopBar() {
    return (
        <Box sx={TopBarStyle}>
            <Logo />
            <Box sx={MiddleBoxStyles}></Box>
            <SearchContainer />
            <Box sx={MiddleBoxStyles}></Box>
            <RightBar />
        </Box>
    );
}
