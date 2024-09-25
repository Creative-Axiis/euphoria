import Box from "@mui/material/Box";
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
export const LogoStyle = {
  
    height: "100%",
    width: "208px", // need to use 1440px
    backgroundColor: "white",
    // position: "fixed",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    margin: 0, // Remove all margins
    boxSizing: "border-box", // Include padding and border in element's width and height
    padding: "8px 24px 8px 24px",
    alignment:"left",
};
export default function TopBar() {
    return (
        <Box sx={TopBarStyle}>
           <Box sx={LogoStyle}>
           </Box>
        </Box>
    );
}
