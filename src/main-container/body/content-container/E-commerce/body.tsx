import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export const EcommerceBodyStyle = {
    height: "492px",
    width: "100%", // need to use 1440px
    background: "#FAFAFA",
    // position: "fixed",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    // marginLeft: "232px", // Remove all margins
    boxSizing: "border-box", // Include padding and border in element's width and height
    padding: "24px",
    margin: "24px",
    // overflowY: "auto", // Enable vertical scrolling
    // zIndex: 999, // Ensure it's above other content
    borderRadius: "16px",
    border: "1px solid #EAEAEA",
    top: 0,
    left: 0,

};

export default function EcommerceBody() {


    return (
        <Box sx={EcommerceBodyStyle}>


        </Box>
    );
}
