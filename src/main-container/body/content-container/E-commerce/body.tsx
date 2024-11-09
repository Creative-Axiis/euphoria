import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chart from "./chart";

export const EcommerceBodyStyle = {
    height: "492px", // Fixed height
    minHeight: "492px", // Ensure minimum height is also fixed
    maxHeight: "492px", // Ensure maximum height is also fixed
    background: "#FAFAFA",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    boxSizing: "border-box", // Include padding and border in element's width and height
    // padding: "24px",
    margin: "24px",
    borderRadius: "16px",
    border: "1px solid #EAEAEA",
    top: 0,
    left: 0,
};

export const LeftPortion = {
    height: "444px", // Fixed height
    width: "287px",
    background: "#FAFAFA",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    boxSizing: "border-box", // Include padding and border in element's width and height
    margin: "24px",
    borderRadius: "8px",
    border: "1px solid #EAEAEA",
    top: 0,
    left: 0,
};

export const RightPortion = {
    height: "444px", // Fixed height
    width: "100%",
    background: "#FFFFFF",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    boxSizing: "border-box", // Include padding and border in element's width and height
    margin: "24px 24px 24px 0px",
    borderRadius: "8px",
    border: "1px solid #EAEAEA",
    top: 0,
    left: 0,
};

export const RightPortionUpperPart = {
    height: "191px",
    width: "100%",
    background: "#FFFFFF",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    boxSizing: "border-box", // Include padding and border in element's width and height
    borderRadius: "8px 8px 0 0",
    borderBottom: "1px solid #EAEAEA",
    top: 0,
    left: 0,
};

export const RightPortionLowerPart = {
    height: "252px",
    width: "100%",
    background: "#FFFFFF",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    boxSizing: "border-box", // Include padding and border in element's width and height
    borderRadius: "0 0 8px 8px",
    borderTop: "1px solid #EAEAEA",
    top: 0,
    left: 0,
};

export const RightPortionUpperPartUpperPart = {
    height: "80px",
    width: "100%",
    background: "#FFFFFF",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    boxSizing: "border-box", // Include padding and border in element's width and height
    borderRadius: "8px 8px 0 0",
    borderBottom: "1px solid #EAEAEA",
    top: 0,
    left: 0,
    padding: "24px 20px 24px 20px",
    alignItems: "center", // Add this to center vertically only
    justifyContent: "space-between", // Add this to create space between elements
};

const MetricBox = ({ value, label }: { value: string; label: string }) => (
    <Box
        sx={{
            height: "111px",
            width: "25%",
            background: "#FFFFFF",
            display: "flex",
            position: "relative",
            boxSizing: "border-box",
            borderRight: "1px solid #EAEAEA",
            padding: "24px 20px 24px 20px",
        }}
    >
        <Stack direction="column" spacing={0} sx={{ width: "100%" }}>
            <Box
                sx={{
                    height: "32px",
                    width: "100%",
                    background: "#FFFFFF",
                    display: "flex",
                    position: "relative",
                    boxSizing: "border-box",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "24px",
                        fontWeight: "500",
                        color: "#101318",
                    }}
                >
                    {value}
                </Typography>
            </Box>
            <Box
                sx={{
                    height: "16px",
                    width: "100%",
                    background: "#FFFFFF",
                    marginTop: "15px",
                    display: "flex",
                    position: "relative",
                    boxSizing: "border-box",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#101318",
                    }}
                >
                    {label}
                </Typography>
            </Box>
        </Stack>
    </Box>
);

const RevenueButton = ({ label }: { label: string }) => (
    <Button
        sx={{
            height: "32px",
            minWidth: "33px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
            "&:hover": {
                backgroundColor: "#5654D4",
                "& .buttonText": {
                    color: "#FFFFFF",
                },
            },
            textTransform: "none",
        }}
    >
        <Typography
            className="buttonText"
            sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#7C818A",
            }}
        >
            {label}
        </Typography>
    </Button>
);

export const LittleBox1 = {
    height: "111px",
    width: "100%",
    background: "#FFFFFF",
    display: "flex",
    position: "relative",
    boxSizing: "border-box",
    borderBottom: "1px solid #EAEAEA",
    padding: "24px 20px 24px 20px",
};

export const LittleBox2 = {
    height: "111px",
    width: "100%",
    background: "#FFFFFF",
    display: "flex",
    position: "relative",
    boxSizing: "border-box",
    borderBottom: "1px solid #EAEAEA",
    padding: "24px 20px 24px 20px",
};

export const LittleBox3 = {
    height: "111px",
    width: "100%",
    background: "#FFFFFF",
    display: "flex",
    position: "relative",
    boxSizing: "border-box",
    borderBottom: "1px solid #EAEAEA",
    padding: "24px 20px 24px 20px",
};

export const LittleBox4 = {
    height: "111px",
    width: "100%",
    background: "#FFFFFF",
    display: "flex",
    position: "relative",
    boxSizing: "border-box",
    borderBottom: "1px solid #EAEAEA",
    padding: "24px 20px 24px 20px",
};

export default function EcommerceBody() {
    return (
        <Box sx={EcommerceBodyStyle}>
            <Box sx={LeftPortion}>
                <Stack direction="column" spacing={0} sx={{ width: "100%" }}>
                    <Box sx={LittleBox1}>
                        <Stack direction="column" spacing={0} sx={{ width: "100%" }}>
                            <Box sx={{ height: "16px", width: "100%" }}>
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: "500",
                                        color: "#101318",
                                    }}
                                >
                                    Total Earnings
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    height: "32px",
                                    width: "100%",
                                    marginTop: "15px",
                                }}
                            >
                                <Stack
                                    direction="row"
                                    spacing={1}
                                    alignItems="baseline" // Add this to align text properly
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "24px",
                                            fontWeight: "500",
                                            color: "#101318",
                                        }}
                                    >
                                        $559.25k
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "13px",
                                            fontWeight: "500",
                                            color: "#24733B",
                                        }}
                                    >
                                        +16.43%
                                    </Typography>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                    <Box sx={LittleBox2}>
                        <Stack direction="column" spacing={0} sx={{ width: "100%" }}>
                            <Box sx={{ height: "16px", width: "100%" }}>
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: "500",
                                        color: "#101318",
                                    }}
                                >
                                    Orders
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    height: "32px",
                                    width: "100%",
                                    marginTop: "15px",
                                }}
                            >
                                <Stack
                                    direction="row"
                                    spacing={1}
                                    alignItems="baseline" // Add this to align text properly
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "24px",
                                            fontWeight: "500",
                                            color: "#101318",
                                        }}
                                    >
                                        36,894
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "13px",
                                            fontWeight: "500",
                                            color: "#9E3F3F",
                                        }}
                                    >
                                        -4.43%
                                    </Typography>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                    <Box sx={LittleBox3}>
                        <Stack direction="column" spacing={0} sx={{ width: "100%" }}>
                            <Box sx={{ height: "16px", width: "100%" }}>
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: "500",
                                        color: "#101318",
                                    }}
                                >
                                    Customers
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    height: "32px",
                                    width: "100%",
                                    marginTop: "15px",
                                }}
                            >
                                <Stack
                                    direction="row"
                                    spacing={1}
                                    alignItems="baseline" // Add this to align text properly
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "24px",
                                            fontWeight: "500",
                                            color: "#101318",
                                        }}
                                    >
                                        183.35M
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "13px",
                                            fontWeight: "500",
                                            color: "#24733B",
                                        }}
                                    >
                                        +29.08%
                                    </Typography>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                    <Box sx={LittleBox4}>
                        <Stack direction="column" spacing={0} sx={{ width: "100%" }}>
                            <Box sx={{ height: "16px", width: "100%" }}>
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: "500",
                                        color: "#101318",
                                    }}
                                >
                                    My Balance
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    height: "32px",
                                    width: "100%",
                                    marginTop: "15px",
                                }}
                            >
                                <Stack
                                    direction="row"
                                    spacing={1}
                                    alignItems="baseline" // Add this to align text properly
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "24px",
                                            fontWeight: "500",
                                            color: "#101318",
                                        }}
                                    >
                                        $165.89k
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "13px",
                                            fontWeight: "500",
                                            color: "#24733B",
                                        }}
                                    >
                                        +12.33%
                                    </Typography>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
            <Box sx={RightPortion}>
                <Stack direction="column" spacing={0} sx={{ width: "100%" }}>
                    <Box sx={RightPortionUpperPart}>
                        <Stack direction="column" spacing={0} sx={{ width: "100%" }}>
                            <Box sx={RightPortionUpperPartUpperPart}>
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: "500",
                                        color: "#101318",
                                    }}
                                >
                                    Revenue
                                </Typography>
                                <Box sx={{ height: "32px", width: "176px" }}>
                                    <Stack direction="row" spacing={1} width="100%">
                                        <RevenueButton label="All" />
                                        <RevenueButton label="1M" />
                                        <RevenueButton label="6M" />
                                        <RevenueButton label="1Y" />
                                    </Stack>
                                </Box>
                            </Box>
                            <Box sx={RightPortionUpperPart}>
                                {[
                                    { value: "7,585", label: "Orders" },
                                    { value: "$22.89K", label: "Earnings" },
                                    { value: "367", label: "Refunds" },
                                    { value: "18.93%", label: "Conversion Ratio" },
                                ].map((metric, index) => (
                                    <MetricBox
                                        key={index}
                                        value={metric.value}
                                        label={metric.label}
                                    />
                                ))}
                            </Box>
                        </Stack>
                    </Box>
                    <Box sx={RightPortionLowerPart}>
                        <Chart />
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
}