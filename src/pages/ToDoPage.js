import React from "react";
import ToDoEntryForm from "../components/todo/ToDoEntryForm";
import TodoList from "../components/todo/ToDoList";
import {Box} from "@mui/material";
import ToDoSaveButton from "../components/todo/ToDoSaveButton";
import {useAuth0} from "@auth0/auth0-react";


const ToDoPage = ({ addToDo, toDoData, deleteToDo, changeCheck }) => {
    const user = useAuth0();
    return (
        <Box sx={{
                maxWidth: '1000px',
                width: '100%',
                margin: '0 auto',
            }}
        >
            <TodoList toDoData={toDoData}
                      changeCheck={changeCheck}
                      deleteToDo={deleteToDo} />
            <ToDoEntryForm addTodo={addToDo} />
            <ToDoSaveButton toDoData={toDoData} />
        </Box>
    )
};

export default ToDoPage;
