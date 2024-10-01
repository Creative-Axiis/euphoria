import Box from "@mui/material/Box";
import Chart from "./chart";
import useMediaQuery from "@mui/material/useMediaQuery";

export const ContentContainerStyle = {
    height: "100vh",
    width: "100%", // need to use 1440px
    background: "#FFFFFF",
    // position: "fixed",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    // marginLeft: "232px", // Remove all margins
    boxSizing: "border-box", // Include padding and border in element's width and height
    padding: "24px 24px 200px 24px",
    alignment: "left",
    overflowY: "auto", // Enable vertical scrolling
    zIndex: 999, // Ensure it's above other content
    borderRadius: "0px 30px 0px 0px",

    // Custom scrollbar for WebKit browsers (Chrome, Safari)
    "&::-webkit-scrollbar": {
        width: "4px", // Width of the scrollbar
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#888", // Scrollbar thumb color
        borderRadius: "10px", // Make the scrollbar rounded
    },
    "&::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "#555", // Thumb color on hover
    },
    "&::-webkit-scrollbar-track": {
        backgroundColor: "#f1f1f1", // Scrollbar track background
    },
};

export default function ContentContainer() {
    const isMobile = useMediaQuery("(max-width:1057px)");
    const containerStyle = {
        ...ContentContainerStyle,
        marginLeft: isMobile ? "0px" : "232px",
    };
    return (
        <Box sx={containerStyle}>
            <Chart />
        </Box>
    );
}
