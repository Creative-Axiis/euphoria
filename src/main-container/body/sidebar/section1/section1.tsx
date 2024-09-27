import { Icon, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";

export const Section1Style = {
    height: "fit-content",
    width: "200px", // need to use 1440px
    // backgroundColor: "green",
    // position: "fixed",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    margin: 0, // Remove all margins
    boxSizing: "border-box", // Include padding and border in element's width and height
    // padding: "32px 16px 32px 16px",
    alignment: "left",
};
export const ItemStyle = {
    width: "200px", // need to use 1440px
    height: "32px",
    padding: "8px",
    // backgroundColor: "green",
    // position: "fixed",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    margin: 0, // Remove all margins
    //boxSizing: "border-box", // Include padding and border in element's width and height
    //alignment: "center-left",
   // alignItems: "center",
    alignment: "left",
};
export default function Section1() {
    return (
        <Box sx={Section1Style}>
            <Stack direction="column" spacing={0.2}>
                <Box
                    sx={{
                        height: "29px",
                        width: "200px",
                    }}
                >
                    <Typography
                        sx={{
                            padding: "8px",
                            fontWeight: "600",
                            fontSize: "11px",
                            lineHeight: "13.31px",
                            letterSpacing: "-0.01em",
                        }}
                        color="#7A7A7A"
                    >
                        Dahboard
                    </Typography>
                </Box>
                <Box
                    sx={
                        ItemStyle
                    }
                    >
                    <Icon>
                        <Box
                            component="img"
                            src="analytics.svg"
                            alt="icon"
                            width="14px"
                            height="14px"
                            alignItems={"left"}
                           // marginBottom={4}
                        />
                    </Icon>
                    <Typography
                        sx={{
                            fontWeight: "600",
                            fontSize: "13px",
                            lineHeight: "16px",
                            letterSpacing: "-0.01em",
                        }}
                    >
                        Analytics
                    </Typography>
                </Box>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
            </Stack>
        </Box>
    );
}
