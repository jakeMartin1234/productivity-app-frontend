import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() !== '') {
            addTodo(text);
            setText('');
        }
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <Box component="form"
             onSubmit={handleSubmit}
             sx={{
                 marginTop: '2rem',
             }}
        >
            <TextField
                label="Enter new item here ..."
                variant="standard"
                value={text}
                onChange={handleChange}
                fullWidth
                sx={{ mb: 2}}
                InputLabelProps={{
                    sx: {
                        color: "grey",
                    }
                }}
            />
            <Button type="submit" variant="contained" color="primary">
                Add To List
            </Button>
        </Box>
    );
};

export default TodoForm;
