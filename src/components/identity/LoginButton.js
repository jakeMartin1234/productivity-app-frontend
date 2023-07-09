import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Typography, Button, useTheme} from "@mui/material";

const LoginButton = ({ buttonText }) => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Button variant="contained"
                color='secondary'
                onClick={() => loginWithRedirect()}>
            <Typography variant={"body1"} fontSize='1.0rem' fontWeight='bold'>
                {buttonText}
            </Typography>
        </Button>
    );
};

export default LoginButton;
