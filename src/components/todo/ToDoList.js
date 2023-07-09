import React, { useState } from 'react';
import {
    Box,
    Checkbox,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme,
} from '@mui/material';
import Close from '@mui/icons-material/Close';

const TodoList = ({ toDoData, changeCheck, deleteToDo }) => {
    const theme = useTheme()

    const handleCheckboxToggle = (id) => {
        changeCheck(id);
    };

    const handleDeleteTodo = (id) => {
        deleteToDo(id);
    };

    if (toDoData.length === 0) {
        return (
            <Typography variant="body1"
                        color="textSecondary"
            >
                No items in the Todo list.
            </Typography>
        );
    }
    return (
        <List>
            {toDoData.map((todo) => (
                <Box
                    key={todo.id}
                    component="li"
                    sx={{
                        bgcolor: todo.completed
                            ? '#666666'
                            : '#333333',
                        marginBottom: '8px',
                        borderRadius: '3px',
                        boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.3)",
                    }}
                >
                    <ListItem disableGutters
                              component="div"
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                bottom: 0,
                                width: '5px',
                                borderRadius: '3px 0px 0px 3px',
                                backgroundColor: theme.palette.primary.main,
                            }}
                        />
                        <ListItemIcon sx={{ marginLeft: '15px' }}>
                            <Checkbox
                                checked={todo.completed}
                                onChange={() => handleCheckboxToggle(todo.id)}
                                sx={{ color: theme.palette.primary.main}}

                            />
                        </ListItemIcon>
                        <ListItemText primary={todo.text}
                                      primaryTypographyProps={{fontSize: '1.2rem'}}
                        />
                        <Box>
                            <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={() => handleDeleteTodo(todo.id)}
                                sx={{ color: '#FF3333',
                                    marginRight: '15px',
                                }}
                            >
                                <Close sx={{ width: '30px', height: '30px' }} />
                            </IconButton>
                        </Box>
                    </ListItem>
                </Box>
            ))}
        </List>
    );
};

export default TodoList;

