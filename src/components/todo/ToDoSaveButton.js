import React, { useState } from 'react';
import { Button, Alert } from '@mui/material';
import axios from 'axios';
import {useAuth0} from "@auth0/auth0-react";

function ToDoSaveButton({ toDoData }) {
    const [showSuccess, setShowSuccess] = useState(false);
    const { user } = useAuth0();

    const handleClick = async () => {
        console.log("Clicked save button");

        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/addToDo`,
            {
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
            {showSuccess &&
                <div
                    style={{
                        position: 'fixed',
                        bottom: '1rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 9999,
                    }}
                >
                    <Alert
                        severity="success" // Change the severity as desired (success, error, warning, info)
                        onClose={() => setShowSuccess(false)}
                    >
                        Save Successful!
                    </Alert>
                </div>
            }
        </div>
    );
}

export default ToDoSaveButton;

