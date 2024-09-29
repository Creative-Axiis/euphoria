import Box from "@mui/material/Box";
import Logo from "./logo/logo";
import RightBar from "./right-bar/right-bar";
import SearchContainer from "./search-container/search-container";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from "@mui/icons-material/Close";

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
interface TopBarProps {
    sidebarOpen: boolean;
    toggleSidebar: () => void;
}

export default function TopBar({ sidebarOpen, toggleSidebar }: TopBarProps) {
    const isMobile = useMediaQuery("(max-width:1057px)");

    return (
        <Box sx={TopBarStyle}>
            {/* Left Section: Show Logo or MenuIcon based on screen size */}
            {isMobile ? (
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleSidebar}
                >
                    {sidebarOpen ? (
                        <CloseIcon
                            sx={{
                                color: "#fff",
                                height: "20px",
                                width: "20px",
                            }}
                        />
                    ) : (
                        <MenuIcon
                            sx={{
                                color: "#fff",
                                height: "20px",
                                width: "20px",
                            }}
                        />
                    )}
                </IconButton>
            ) : (
                <Logo />
            )}
            {/* Middle Section: Hidden on mobile */}
            {!isMobile && <Box sx={MiddleBoxStyles}></Box>}

            {/* Search Bar: Hidden on mobile */}
            {!isMobile && <SearchContainer />}

            {/* Middle Section: Hidden on mobile */}
            {!isMobile && <Box sx={MiddleBoxStyles}></Box>}
            <RightBar />
        </Box>
    );
}
