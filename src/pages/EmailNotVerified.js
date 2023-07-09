import React from "react";
import LoginButton from "../components/identity/LoginButton";
import LogoutButton from "../components/identity/LogoutButton";
import {Box, Typography} from "@mui/material";
import GreetingPageBox from "../components/utils/GreetingpageBox";

const EmailNotVerified = () => {
    return (
        <GreetingPageBox>
            <Typography variant='body1'>
                Success!<br />
                Please verify your email before before clicking "Continue" ...
            </Typography>
            <br />
            <LoginButton buttonText="Continue" />
            <br />
            <LogoutButton />
        </GreetingPageBox>
    );
}

export default EmailNotVerified;
