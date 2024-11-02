import Box from "@mui/material/Box";

export const EcommerceBodyStyle = {
    height: "492px", // Fixed height
    minHeight: "492px", // Ensure minimum height is also fixed
    maxHeight: "492px", // Ensure maximum height is also fixed
    background: "#FAFAFA",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    boxSizing: "border-box", // Include padding and border in element's width and height
    padding: "24px",
    margin: "24px",
    borderRadius: "16px",
    border: "1px solid #EAEAEA",
    top: 0,
    left: 0,
};

/**
 * EcommerceBody component renders the main body of the e-commerce section.
 */
export default function EcommerceBody() {
    return (
        <Box sx={EcommerceBodyStyle}>
        </Box>
    );
}
