import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { memo } from "react";

// Types
interface StatCardProps {
    title: string;
    value: string;
    change?: {
        value: string;
        isPositive: boolean;
    };
}

interface MetricCardProps {
    value: string;
    label: string;
    hasBorder?: boolean;
}

// Shared Styles
const styles = {
    text: {
        title: {
            fontSize: "14px",
            fontWeight: "600",
            color: "#101318",
        },
        value: {
            fontSize: "24px",
            fontWeight: "600",
            color: "#101318",
        },
        metric: {
            fontSize: "13px",
            fontWeight: "500",
        },
        label: {
            fontSize: "14px",
            fontWeight: "400",
            color: "#101318",
        },
        button: {
            fontSize: "14px",
            fontWeight: "400",
            color: "#7C818A",
        },
    },
    containers: {
        main: {
            height: "492px",
            minHeight: "492px",
            maxHeight: "492px",
            background: "#FAFAFA",
            display: "flex",
            position: "relative",
            boxSizing: "border-box",
            margin: "24px",
            borderRadius: "16px",
            border: "1px solid #EAEAEA",
        },
        section: {
            background: "#FAFAFA",
            display: "flex",
            position: "relative",
            boxSizing: "border-box",
            borderRadius: "8px",
            border: "1px solid #EAEAEA",
        },
    },
};

// Components
const StatCard = memo(({ title, value, change }: StatCardProps) => (
    <Box sx={{ p: "24px 20px", borderBottom: "1px solid #EAEAEA" }}>
        <Stack spacing={1.875}>
            <Typography sx={styles.text.title}>{title}</Typography>
            <Stack direction="row" spacing={1} alignItems="baseline">
                <Typography sx={styles.text.value}>{value}</Typography>
                {change && (
                    <Typography
                        sx={{
                            ...styles.text.metric,
                            color: change.isPositive ? "#24733B" : "#9E3F3F",
                        }}
                    >
                        {change.value}
                    </Typography>
                )}
            </Stack>
        </Stack>
    </Box>
));

const MetricCard = memo(({ value, label, hasBorder = true }: MetricCardProps) => (
    <Box
        sx={{
            width: "25%",
            p: "24px 20px",
            borderRight: hasBorder ? "1px solid #EAEAEA" : "none",
        }}
    >
        <Stack spacing={1.875}>
            <Typography sx={styles.text.value}>{value}</Typography>
            <Typography sx={styles.text.label}>{label}</Typography>
        </Stack>
    </Box>
));

const TimeFilter = memo(() => {
    const filters = ["All", "1M", "6M", "1Y"];

    return (
        <Stack direction="row" spacing={1} width="176px">
            {filters.map((filter) => (
                <Button
                    key={filter}
                    sx={{
                        height: 32,
                        minWidth: "33px",
                        borderRadius: 4,
                        p: 0,
                        "&:hover": {
                            backgroundColor: "#5654D4",
                            "& .buttonText": { color: "#FFFFFF" },
                        },
                        textTransform: "none",
                    }}
                >
                    <Typography className="buttonText" sx={styles.text.button}>
                        {filter}
                    </Typography>
                </Button>
            ))}
        </Stack>
    );
});

const EcommerceBody = () => {
    const stats = [
        { title: "Total Earnings", value: "$559.25k", change: { value: "+16.43%", isPositive: true } },
        { title: "Orders", value: "36,894", change: { value: "-4.43%", isPositive: false } },
        { title: "Customers", value: "183.35M", change: { value: "+29.08%", isPositive: true } },
        { title: "My Balance", value: "$165.89k", change: { value: "+12.33%", isPositive: true } },
    ];

    const metrics = [
        { value: "7,585", label: "Orders" },
        { value: "$22.89K", label: "Earnings" },
        { value: "367", label: "Refunds" },
        { value: "18.93%", label: "Conversion Ratio" },
    ];

    return (
        <Box sx={styles.containers.main}>
            {/* Left Section */}
            <Box sx={{ ...styles.containers.section, width: 287, m: 3 }}>
                <Stack width="100%">
                    {stats.map((stat, index) => (
                        <StatCard key={index} {...stat} />
                    ))}
                </Stack>
            </Box>

            {/* Right Section */}
            <Box sx={{ ...styles.containers.section, flex: 1, m: "24px 24px 24px 0" }}>
                <Stack width="100%">
                    {/* Header */}
                    <Box sx={{ p: 3, borderBottom: "1px solid #EAEAEA", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography sx={styles.text.title}>Revenue</Typography>
                        <TimeFilter />
                    </Box>

                    {/* Metrics */}
                    <Box display="flex">
                        {metrics.map((metric, index) => (
                            <MetricCard
                                key={index}
                                {...metric}
                                hasBorder={index !== metrics.length - 1}
                            />
                        ))}
                    </Box>

                    {/* Chart Area */}
                    <Box sx={{ height: 252, borderTop: "1px solid #EAEAEA" }} />
                </Stack>
            </Box>
        </Box>
    );
};

StatCard.displayName = "StatCard";
MetricCard.displayName = "MetricCard";
TimeFilter.displayName = "TimeFilter";

export default memo(EcommerceBody);
