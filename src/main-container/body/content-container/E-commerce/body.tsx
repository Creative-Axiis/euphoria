import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

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
    width: "873px",
    background: "#FAFAFA",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    boxSizing: "border-box", // Include padding and border in element's width and height
    margin: "24px 24px 24px 0px",
    borderRadius: "8px",
    border: "1px solid #EAEAEA",
    top: 0,
    left: 0,
};

export const LittleBox1 = {
    height: "111px", // Fixed height
    width: "100%",
    background: "#FAFAFA",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    boxSizing: "border-box", // Include padding and border in element's width and height
    // margin: "24px",
    borderRadius: "8px 8px 0px 0px",
    // border: "1px solid #EAEAEA",
    top: 0,
    left: 0,
    padding: "24px 20px 24px 20px",
};
export const LittleBox2 = {
    height: "111px", // Fixed height
    width: "100%",
    background: "#FAFAFA",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    boxSizing: "border-box", // Include padding and border in element's width and height
    // margin: "24px",
    borderRadius: "0px",
    borderTop: "1px solid #EAEAEA",
    top: 0,
    left: 0,
    padding: "24px 20px 24px 20px",
};
export const LittleBox3 = {
    height: "111px", // Fixed height
    width: "100%",
    background: "#FAFAFA",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    boxSizing: "border-box", // Include padding and border in element's width and height
    // margin: "24px",
    borderRadius: "0px",
    borderTop: "1px solid #EAEAEA",
    top: 0,
    left: 0,
    padding: "24px 20px 24px 20px",
};
export const LittleBox4 = {
    height: "111px", // Fixed height
    width: "100%",
    background: "#FAFAFA",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    boxSizing: "border-box", // Include padding and border in element's width and height
    // margin: "24px",
    borderRadius: "0px 0px 8px 8px",
    borderTop: "1px solid #EAEAEA",
    borderBottom: "1px solid #EAEAEA",
    top: 0,
    left: 0,
    padding: "24px 20px 24px 20px",
};

export const RightPortionUpperPart = {
    height: "191px",
    width: "100%",
    background: "#FAFAFA",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    boxSizing: "border-box", // Include padding and border in element's width and height
    // margin: "24px",
    // borderRadius: "0px 0px 8px 8px",
    // borderTop: "1px solid #EAEAEA",
    // borderBottom: "1px solid #EAEAEA",
    top: 0,
    left: 0,
    // padding: "24px 20px 24px 20px",
};
export const RightPortionLowerPart = {
    height: "252px",
    width: "100%",
    background: "#FAFAFA",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    boxSizing: "border-box", // Include padding and border in element's width and height
    // margin: "24px",
    // borderRadius: "0px 0px 8px 8px",
    borderTop: "1px solid #EAEAEA",
    // borderBottom: "1px solid #EAEAEA",
    top: 0,
    left: 0,
    // padding: "24px 20px 24px 20px",
};

export const RightPortionUpperPartUpperPart = {
    height: "80px",
    width: "100%",
    background: "#FAFAFA",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    boxSizing: "border-box", // Include padding and border in element's width and height
    // margin: "24px",
    // borderRadius: "0px 0px 8px 8px",
    // borderTop: "1px solid #EAEAEA",
    borderBottom: "1px solid #EAEAEA",
    top: 0,
    left: 0,
    padding: "24px 20px 24px 20px",
    alignItems: "center", // Add this to center vertically only
    justifyContent: "space-between", // Add this to create space between elements
};
export const RightPortionUpperPartLowerPart = {
    height: "111px",
    width: "100%",
    background: "#FAFAFA",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    boxSizing: "border-box", // Include padding and border in element's width and height
    // margin: "24px",
    // borderRadius: "0px 0px 8px 8px",
    // borderTop: "1px solid #EAEAEA",
    // borderBottom: "1px solid #EAEAEA",
    top: 0,
    left: 0,
    // padding: "24px 20px 24px 20px",
};

/**
 * EcommerceBody component renders the main body of the e-commerce section.
 */
export default function EcommerceBody() {
    return (
        <Box sx={EcommerceBodyStyle}>
            <Box sx={LeftPortion}>
                <Stack direction="column" spacing={0} sx={{ width: "100%" }}>
                    <Box sx={LittleBox1}>
                        <Stack
                            direction="column"
                            spacing={0}
                            sx={{ width: "100%" }}
                        >
                            <Box sx={{ height: "16px", width: "100%" }}>
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: "600",
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
                                            fontWeight: "600",
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
                        <Stack
                            direction="column"
                            spacing={0}
                            sx={{ width: "100%" }}
                        >
                            <Box sx={{ height: "16px", width: "100%" }}>
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: "600",
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
                                            fontWeight: "600",
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
                        <Stack
                            direction="column"
                            spacing={0}
                            sx={{ width: "100%" }}
                        >
                            <Box sx={{ height: "16px", width: "100%" }}>
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: "600",
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
                                            fontWeight: "600",
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
                        <Stack
                            direction="column"
                            spacing={0}
                            sx={{ width: "100%" }}
                        >
                            <Box sx={{ height: "16px", width: "100%" }}>
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: "600",
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
                                            fontWeight: "600",
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
                        <Stack
                            direction="column"
                            spacing={0}
                            sx={{ width: "100%" }}
                        >
                            <Box sx={RightPortionUpperPartUpperPart}>
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: "600",
                                        color: "#101318",
                                    }}
                                >
                                    Revenue
                                </Typography>
                                <Box sx={{ height: "32px", width: "176px" }}>
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        width="100%"
                                    >
                                        <Button
                                            sx={{
                                                height: "32px",
                                                minWidth: "33px",
                                                borderRadius: "4px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                cursor: "pointer",
                                                padding: 0,
                                                "&:hover": {
                                                    backgroundColor: "#5654D4",
                                                    "& .buttonText": {
                                                        // Target the Typography component
                                                        color: "#FFFFFF",
                                                    },
                                                },
                                                textTransform: "none", // Prevents automatic uppercase
                                            }}
                                        >
                                            <Typography
                                                className="buttonText" // Add this class to target in hover
                                                sx={{
                                                    fontSize: "14px",
                                                    fontWeight: "400",
                                                    color: "#7C818A",
                                                }}
                                            >
                                                All
                                            </Typography>
                                        </Button>
                                        <Box
                                            sx={{
                                                height: "32px",
                                                width: "36px",
                                                borderRadius: "4px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: "14px",
                                                    fontWeight: "400",
                                                    color: "#7C818A",
                                                }}
                                            >
                                                1M
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                height: "32px",
                                                width: "33px",
                                                borderRadius: "4px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: "14px",
                                                    fontWeight: "400",
                                                    color: "#7C818A",
                                                }}
                                            >
                                                6M
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                height: "32px",
                                                width: "33px",
                                                borderRadius: "4px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: "#5654D4",
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: "14px",
                                                    fontWeight: "400",
                                                    color: "#FFFFFF",
                                                }}
                                            >
                                                1Y
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Box>
                            </Box>
                            <Box sx={RightPortionUpperPartLowerPart}>
                                <Box
                                    sx={{
                                        height: "111px",
                                        width: "218.25px",
                                        background: "#FAFAFA",
                                        display: "flex",
                                        position: "relative",
                                        boxSizing: "border-box",
                                        borderRight: "1px solid #EAEAEA",
                                        top: 0,
                                        left: 0,
                                        padding: "24px 20px 24px 20px",
                                    }}
                                >
                                    <Stack
                                        direction="column"
                                        spacing={0}
                                        sx={{ width: "100%" }}
                                    >
                                        <Box
                                            sx={{
                                                height: "32px",
                                                width: "100%",
                                                background: "#FAFAFA",
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
                                                7,585
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                height: "16px",
                                                width: "100%",
                                                background: "#FAFAFA",
                                                marginTop: "15px",
                                                display: "flex",
                                                position: "relative",
                                                boxSizing: "border-box",
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: "14px",
                                                    fontWeight: "400",
                                                    color: "#101318",
                                                }}
                                            >
                                                Orders
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Box>
                                <Box
                                    sx={{
                                        height: "111px",
                                        width: "218.25px",
                                        background: "#FAFAFA",
                                        display: "flex",
                                        position: "relative",
                                        boxSizing: "border-box",
                                        borderRight: "1px solid #EAEAEA",
                                        top: 0,
                                        left: 0,
                                        padding: "24px 20px 24px 20px",
                                    }}
                                >
                                    <Stack
                                        direction="column"
                                        spacing={0}
                                        sx={{ width: "100%" }}
                                    >
                                        <Box
                                            sx={{
                                                height: "32px",
                                                width: "100%",
                                                background: "#FAFAFA",
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
                                                $22.89K
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                height: "16px",
                                                width: "100%",
                                                background: "#FAFAFA",
                                                marginTop: "15px",
                                                display: "flex",
                                                position: "relative",
                                                boxSizing: "border-box",
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: "14px",
                                                    fontWeight: "400",
                                                    color: "#101318",
                                                }}
                                            >
                                                Earnings
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Box>
                                <Box
                                    sx={{
                                        height: "111px",
                                        width: "218.25px",
                                        background: "#FAFAFA",
                                        display: "flex",
                                        position: "relative",
                                        boxSizing: "border-box",
                                        borderRight: "1px solid #EAEAEA",
                                        top: 0,
                                        left: 0,
                                        padding: "24px 20px 24px 20px",
                                    }}
                                >
                                    <Stack
                                        direction="column"
                                        spacing={0}
                                        sx={{ width: "100%" }}
                                    >
                                        <Box
                                            sx={{
                                                height: "32px",
                                                width: "100%",
                                                background: "#FAFAFA",
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
                                                367
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                height: "16px",
                                                width: "100%",
                                                background: "#FAFAFA",
                                                marginTop: "15px",
                                                display: "flex",
                                                position: "relative",
                                                boxSizing: "border-box",
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: "14px",
                                                    fontWeight: "400",
                                                    color: "#101318",
                                                }}
                                            >
                                                Refunds
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Box>
                                <Box
                                    sx={{
                                        height: "111px",
                                        width: "218.25px",
                                        background: "#FAFAFA",
                                        display: "flex",
                                        position: "relative",
                                        boxSizing: "border-box",
                                        top: 0,
                                        left: 0,
                                        padding: "24px 20px 24px 20px",
                                    }}
                                >
                                    <Stack
                                        direction="column"
                                        spacing={0}
                                        sx={{ width: "100%" }}
                                    >
                                        <Box
                                            sx={{
                                                height: "32px",
                                                width: "100%",
                                                background: "#FAFAFA",
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
                                                18.93%
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                height: "16px",
                                                width: "100%",
                                                background: "#FAFAFA",
                                                marginTop: "15px",
                                                display: "flex",
                                                position: "relative",
                                                boxSizing: "border-box",
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: "14px",
                                                    fontWeight: "400",
                                                    color: "#101318",
                                                }}
                                            >
                                                Conversion Ration
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Box>
                            </Box>
                        </Stack>
                    </Box>
                    <Box sx={RightPortionLowerPart}></Box>
                </Stack>
            </Box>
        </Box>
    );
}
