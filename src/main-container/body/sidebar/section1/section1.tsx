import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useCallback, useMemo, memo, useState } from "react";
import { useNavigation } from "../../../../NavigationContext";

// Types
interface IconPaths {
    default: string;
    white: string;
}

interface Icons {
    [key: string]: IconPaths;
}

interface SidebarItemProps {
    id: string;
    icon: IconPaths;
    label: string;
    isHovered: boolean;
    onMouseEnter: (id: string) => void;
    onMouseLeave: () => void;
}

// Styles
const styles = {
    section: {
        height: "fit-content",
        width: "200px",
        display: "flex",
        position: "relative",
        margin: 0,
        boxSizing: "border-box",
    },
    item: {
        width: "200px",
        height: "32px",
        padding: "8px",
        display: "flex",
        position: "relative",
        margin: 0,
        boxSizing: "border-box",
        alignItems: "center",
        borderRadius: "8px",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
            backgroundColor: "#5654D4",
            cursor: "pointer",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            "& .MuiTypography-root": {
                color: "#FFFFFF",
            },
        },
    },
    icon: {
        width: "14px",
        height: "14px",
    },
    text: {
        paddingLeft: "8px",
        fontWeight: "500",
        fontSize: "13px",
        lineHeight: "16px",
        letterSpacing: "-0.01em",
        color: "#101318",
    },
    header: {
        padding: "8px",
        fontWeight: "600",
        fontSize: "11px",
        lineHeight: "13.31px",
        letterSpacing: "-0.01em",
        color: "#A1A1A1",
    },
};

// Memoized SidebarItem component
const SidebarItem = memo(function SidebarItem({
    id,
    icon,
    label,
    isHovered,
    onMouseEnter,
    onMouseLeave,
}: SidebarItemProps) {
    const { setActiveTab, activeTab } = useNavigation();
    const isSelected = activeTab === id;

    return (
        <Box
            sx={{
                ...styles.item,
                backgroundColor: isSelected ? "#5654D4" : "transparent",
                "& .MuiTypography-root": {
                    color: isSelected ? "#FFFFFF" : "#101318"
                }
            }}
            onClick={() => {
                setActiveTab(id);
            }}
            onMouseEnter={() => onMouseEnter(id)}
            onMouseLeave={onMouseLeave}
        >
            <Box
                sx={styles.icon}
                component="img"
                src={isHovered || isSelected ? icon.white : icon.default}
                alt={`${id}-icon`}
            />
            <Typography sx={styles.text}>{label}</Typography>
        </Box>
    );
});

SidebarItem.displayName = "SidebarItem";

// Main component
export default function Section1() {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const handleMouseEnter = useCallback((id: string) => {
        setHoveredItem(id);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHoveredItem(null);
    }, []);

    const icons: Icons = useMemo(
        () => ({
            analytics: {
                default: "/icons/sideBar/Analytics.svg",
                white: "/icons/sideBar/Analytics_white.svg",
            },
            ecommerce: {
                default: "/icons/sideBar/E-commerce.svg",
                white: "/icons/sideBar/E-commerce_white.svg",
            },
            finance: {
                default: "/icons/sideBar/Finance.svg",
                white: "/icons/sideBar/Finance_white.svg",
            },
            stockMarket: {
                default: "/icons/sideBar/Stock-Market.svg",
                white: "/icons/sideBar/Stock-Market_white.svg",
            },
            crm: {
                default: "/icons/sideBar/CRM.svg",
                white: "/icons/sideBar/CRM_white.svg",
            },
            projectManagement: {
                default: "/icons/sideBar/Project-Management.svg",
                white: "/icons/sideBar/Project-Management_white.svg",
            },
            booking: {
                default: "/icons/sideBar/Booking.svg",
                white: "/icons/sideBar/Booking_white.svg",
            },
            crypto: {
                default: "/icons/sideBar/Crypto.svg",
                white: "/icons/sideBar/Crypto_white.svg",
            },
        }),
        []
    );

    const menuItems = useMemo(
        () => [
            { id: "analytics", label: "Analytics" },
            { id: "ecommerce", label: "E-commerce" },
            { id: "finance", label: "Finance" },
            { id: "stockMarket", label: "Stock Market" },
            { id: "crm", label: "CRM" },
            { id: "projectManagement", label: "Project Management" },
            { id: "booking", label: "Booking" },
            { id: "crypto", label: "Crypto" },
        ],
        []
    );

    return (
        <Box sx={styles.section}>
            <Stack direction="column" spacing={0}>
                <Box width="200px" height="29px">
                    <Typography sx={styles.header}>Dashboard</Typography>
                </Box>

                {menuItems.map((item) => (
                    <SidebarItem
                        key={item.id}
                        id={item.id}
                        icon={icons[item.id]}
                        label={item.label}
                        isHovered={hoveredItem === item.id}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />
                ))}
            </Stack>
        </Box>
    );
}
