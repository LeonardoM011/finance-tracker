import {AccountCircle, Lock} from "@mui/icons-material";

const React = require('react');
import {Grid, Button, TextField, FormControl, InputAdornment, Input} from '@material-ui/core';
import SendIcon from '@mui/icons-material/Send';
const ReactDOM = require('react-dom');
import "./Login.css";
import {useState} from "react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const postBody = JSON.stringify({
            username: username,
            password: password
        });
        fetch("/login-post", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: postBody
        })
            .then(response => response.json())
            .then(data => alert(data.status));
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} id={"wrapper"}>
                <Grid item xs={12}>
                    <h1>Finance Tracker</h1>
                    <h3>Prijavite se</h3>
                </Grid>
                <Grid item xs={12}>
                    <TextField
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
        <Login />
    </React.StrictMode>,
    document.getElementById('react')
)