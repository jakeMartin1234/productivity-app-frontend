import React from "react";
import { Box, useTheme } from "@mui/material";

const GreetingPageBox = ({ children }) => {
    const theme = useTheme();
    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: theme.palette.primary.main,
            height: '100vh',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
        }}>
            {children}
        </Box>
    );
}

export default GreetingPageBox;
