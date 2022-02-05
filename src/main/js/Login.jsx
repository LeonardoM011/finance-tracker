import {AccountCircle, Lock} from "@mui/icons-material";
import {BrowserRouter, useNavigate} from "react-router-dom";

const React = require('react');
import {Grid, Button, TextField, FormControl, InputAdornment, Input} from '@material-ui/core';
import SendIcon from '@mui/icons-material/Send';
const ReactDOM = require('react-dom');
import "./Login.css";
import {useEffect, useState} from "react";

function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [wrongPassword, setWrongPassword] = useState("");
    const [textError, setTextError] = useState(false);
    const [helperTextError, setHelperTextError] = useState("");

    useEffect(() => {
        // RUN login to check if user is already logged in
        // TODO: Create another api point to check if cookie is valid
        const postBody = JSON.stringify({
            username: username,
            password: password
        });

        fetch("/auth/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: postBody
        })
            .then(response => {
                if (response.status == 200) {
                    navigate('/');
                    window.location.reload();
                }
            });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        const postBody = JSON.stringify({
            username: username,
            password: password
        });
        fetch("/auth/login", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: postBody
            })
            .then(response => {
                if (response.status == 401) {
                    setWrongPassword("Krivo korisničko ime ili lozinka!");
                    setTextError(true);
                    setHelperTextError("Pokušajte ponovo");
                } else {
                    navigate('/');
                    window.location.reload();
                }
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} id={"wrapper"}>
                <Grid item xs={12}>
                    <h1>Finance Tracker</h1>
                    <h3>Prijavite se</h3>
                    <p id="wrong">{wrongPassword}</p>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        error={textError}
                        helperText={helperTextError}
                        id="username"
                        label="Username"
                        autoComplete="current-username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        error={textError}
                        helperText={helperTextError}
                        id="password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button endIcon={<SendIcon />} variant="contained" type={"submit"}>Login</Button>
                </Grid>
            </Grid>
        </form>);
}

ReactDOM.render(

    <React.StrictMode>
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('react')
)