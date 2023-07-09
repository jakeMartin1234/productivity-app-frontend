import React from "react";
import LoginButton from "../components/identity/LoginButton";
import { Typography } from "@mui/material";
import GreetingPageBox from "../components/utils/GreetingpageBox";

const LoginPage = () => {
    return (
        <GreetingPageBox >
            <Typography variant='body1'>
                Welcome to The Productivity App! <br />
                Please Log In to continue through to the application.
            </Typography>
            <br />
            <LoginButton buttonText="Log In" />
        </GreetingPageBox>
    );
}

export default LoginPage;
