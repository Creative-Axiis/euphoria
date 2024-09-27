import Box from "@mui/material/Box";
import SideBar from "./sidebar/sidebar";
import ContentContainer from "./content-container/content-container";

export const BodyStyle = {
    background: "#FFFFFF",
    height: "fit-content",
    width: "100%", // need to use 1440px
    // backgroundColor: "white",
    // position: "fixed",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    margin: 0, // Remove all margins
    boxSizing: "border-box", // Include padding and border in element's width and height
    borderRadius: "30px 30px 0px 0px",
    // padding: "8px 24px 8px 24px",
    overflow: "hidden", // Add this to prevent overflow of child elements

};

export default function Body() {
    return (
        <Box sx={BodyStyle}>
            <SideBar />
            <ContentContainer />
        </Box>
    );
}
