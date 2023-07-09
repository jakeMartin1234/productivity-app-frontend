import React, { useState } from 'react';
import { Button, Alert } from '@mui/material';
import axios from 'axios';
import {useAuth0} from "@auth0/auth0-react";

function ToDoSaveButton({ toDoData }) {
    const [showSuccess, setShowSuccess] = useState(false);
    const { user } = useAuth0();

    const handleClick = async () => {
        console.log("Clicked save button");

        const response = await axios.post(process.env.BACKEND_URL + 'addToDo', {
            toDoData: toDoData,
            user: user,
        });
        console.log("API call successful!");

        setShowSuccess(true);
        setTimeout(() => {
            console.log("Timeout worked");
            setShowSuccess(false);
        }, 3000);
    };

    return (
        <div>
            <Button variant="contained"
                    onClick={() => handleClick()}
                    sx={{ marginTop: '1.5rem'}}
            >
                Save
            </Button>
            {showSuccess && (
                <Alert
                    severity="success" // Change the severity as desired (success, error, warning, info)
                    onClose={() => setShowSuccess(false)}
                >
                    API call successful!
                </Alert>
            )}
        </div>
    );
}

export default ToDoSaveButton;

