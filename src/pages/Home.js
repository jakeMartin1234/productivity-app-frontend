import React, {useEffect} from "react";
import LogoutButton from "../components/identity/LogoutButton";
import {Box, Toolbar, AppBar, Typography, Button, List, IconButton, Avatar} from "@mui/material";
import ToDoPage from "./ToDoPage";
import HomeLandingPage from "./HomeLandingPage";
import axios from "axios";
import Profile from "../components/identity/Profile";
import {useAuth0} from "@auth0/auth0-react";

const Home = () => {
    const { user } = useAuth0();
    const [renderedComponent, setRenderedComponent] = React.useState("home");
    const [toDoData, setToDoData] = React.useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/getTodo`,
                    {
                    user: user,
                });
                setToDoData(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData().then(() => console.log("Fetched data from API"));
    }, [user]);

    const addToToDoData = (text) => {
        setToDoData((prevToDoData) => [
            ...prevToDoData,
            { id: prevToDoData.length + 1, text, completed: false },
        ]);
    }
    const handleCheckboxToggle = (id) => {
        setToDoData((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };
    const handleDeleteTodo = (id) => {
        setToDoData((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const renderComponent = () => {
        if (renderedComponent === "todo") {
            return <ToDoPage
                addToDo={addToToDoData}
                toDoData={toDoData}
                changeCheck={handleCheckboxToggle}
                deleteToDo={handleDeleteTodo}
            />
        } else if (renderedComponent === "profile") {
            return <Profile />
        } else {
            return <HomeLandingPage />
        }
    }

    const handleAppBarClick = (component) => {
        setRenderedComponent(component);
    }


    return (
        <Box bgcolor="background.default"
            sx={{flexGrow: 1,
                minHeight: '100vh',
            }}
        >
            <AppBar position="static">
                <Toolbar>
                    <Button onClick={() => handleAppBarClick("home")}>
                        <Typography variant={"body1"} fontSize={"1.2rem"} sx={{ mr: 4 }}>
                            Productivity App
                        </Typography>
                    </Button>
                    <List>
                        <Button
                            variant="text"
                            color="secondary"
                            onClick={() => handleAppBarClick("todo")}
                        >
                            TODO LIST
                        </Button>
                    </List>

                    <Box sx={{ flexGrow: 1 }}></Box>
                    <IconButton onClick={() => setRenderedComponent("profile")}
                                sx={{
                                    marginRight: '1.0rem',
                                }}
                    >
                        <Avatar alt={user.email} src={user.picture} />
                    </IconButton>
                    <LogoutButton />
                </Toolbar>
            </AppBar>
                <Box
                     sx={{ flexGrow: 1,
                         marginTop : '2.0rem',
                     }}
                >
                    {renderComponent()}
                </Box>
        </Box>
    )
};

export default Home;
