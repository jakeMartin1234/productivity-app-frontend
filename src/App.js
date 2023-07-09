import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useAuth0 } from '@auth0/auth0-react';
import LoginPage from './pages/LoginPage';
import EmailNotVerified from "./pages/EmailNotVerified";
import Home from "./pages/Home";
import GreetingPageBox from "./components/utils/GreetingpageBox";
import {Typography} from "@mui/material";

function App() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return (
            <GreetingPageBox>
                <Typography variant={"body1"}>
                    Loading ...
                </Typography>
            </GreetingPageBox>
        );
    };

    if (!isAuthenticated) {
        return (
            <LoginPage/>
        );
    };

    if (!user.email_verified) {
        return (
            <EmailNotVerified/>
        );
    };

    return (
        <Home />
    );
}

export default App;
