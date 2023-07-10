import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';
import {Box, Typography} from "@mui/material";

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <Button variant="contained"
                color="secondary"
                onClick={() => logout({ logoutParams:
                        { returnTo: `${window.location.origin}/productivity-app-frontend` } })}>
            <Typography variant={"body1"} fontSize='1.0rem' fontWeight='bold'>
                Log Out
            </Typography>
        </Button>
    );
};

export default LogoutButton;
