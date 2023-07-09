import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, Box, Typography } from "@mui/material";

const Profile = () => {
    const { user } = useAuth0();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                maxWidth: 300,
                gap: 4,
                padding: 4,
                border: "1px solid #e0e0e0",
                borderRadius: 4,
                boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.3)",
                margin: "0 auto",

            }}
            bgcolor={"background.default"}
        >
            <Avatar
                src={user.picture}
                alt={user.name}
                sx={{
                    width: 90,
                    height: 90,
                }}
            />
            {(user.name !== user.email) && (
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    {user.name}
                </Typography>
            )}
            <Typography variant="body2">{user.email}</Typography>
        </Box>
    );
};

export default Profile;

