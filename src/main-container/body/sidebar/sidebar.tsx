// import Box from "@mui/material/Box";
// import Section1 from "./section1/section1";
// import Section2 from "./section2/section2";
// import Section3 from "./section3/section3";
// import { Stack } from "@mui/material";

// export const SidebarStyle = {
//     height: "fit-content",
//     width: "232px", // need to use 1440px
//     // position: "fixed",
//     display: "flex",
//     position: "relative", // Keep it relative to ensure scrolling
//     margin: 0, // Remove all margins
//     boxSizing: "border-box", // Include padding and border in element's width and height
//     padding: "32px 16px 32px 16px",
//     alignment: "left",
//     backgroundColor: "#FAFAFA",
//     border: "1px solid #EAEAEA",
//     overflowY: "scroll", // Enable vertical scrolling
// };

// export default function SideBar() {
//     return (
//         <Box sx={SidebarStyle}>
//             <Stack direction="column" spacing={0}>
//                 <Section1 />
//                 <Section2 />
//                 <Section3 />
//             </Stack>
//         </Box>
//     );
// }
import Box from "@mui/material/Box";
import Section1 from "./section1/section1";
import Section2 from "./section2/section2";
import Section3 from "./section3/section3";
import { Stack } from "@mui/material";

export const SidebarStyle = {
    height: "100vh", // Full height of the viewport
    width: "232px",
    position: "fixed", // Fix position to keep it on the screen
    top: 0, // Align it to the top of the viewport
    left: 0, // Align it to the left of the screen
    display: "flex",
    flexDirection: "column",
    // marginBottom: "180px",
    marginTop: "80px",
    boxSizing: "border-box",
    padding: "32px 16px 100px 16px",
    backgroundColor: "#FAFAFA",
    border: "1px solid #EAEAEA",
    overflowY: "auto", // Enable vertical scrolling
    zIndex: 1000, // Ensure it's above other content
    borderRadius: "30px 0px 0px 0px",

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

export default function SideBar() {
    return (
        <Box sx={SidebarStyle}>
            <Stack direction="column" spacing={0}>
                <Section1 />
                <Section2 />
                <Section3 />
            </Stack>
        </Box>
    );
}
