const React = require('react');
const ReactDOM = require('react-dom');
import {Grid, Button, TextField, FormControl, InputAdornment, Input} from '@material-ui/core';
import SendIcon from '@mui/icons-material/Send';
import {AccountCircle, Lock, Email} from "@mui/icons-material";
import {BrowserRouter, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import "./Register.css";


function Register() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [wrongContent, setWrongContent] = useState("");

    const [emailError, setEmailError] = useState(false);
    const [helperEmailError, setHelperEmailError] = useState("");
    const [usernameError, setUsernameError] = useState(false);
    const [helperUsernameError, setHelperUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [helperPasswordError, setHelperPasswordError] = useState("");
 
    const handleSubmit = (event) => {
        event.preventDefault();

        if (password === passwordRepeat) {

            const postBody = JSON.stringify({
                email: email,
                username: username,
                password: password
            });

            fetch("/auth/register", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: postBody
            })
                .then(response => {
                    if (response.status == 401) {
                        setWrongContent("Neispravni podaci")

                        setEmailError(true)
                        setHelperEmailError("Greška")
                        setUsernameError(true)
                        setHelperUsernameError("Greška")
                        setPasswordError(true)
                        setHelperPasswordError("Greška")
                    } else if (response.status == 200) {
                        navigate('/');
                        window.location.reload();
                    }
                });
        } else {
            setWrongContent("Neispravni podaci")
            setPasswordError(true)
            setHelperPasswordError("Kriva ponovljena lozinka")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} id={"wrapper"}>
                <Grid item xs={12}>
                    <h1>Finance Tracker</h1>
                    <h3>Unesite podatke za registraciju</h3>
                    <p id="wrong">{wrongContent}</p>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        error={emailError}
                        helperText={helperEmailError}
                        id="email"
                        label="Email"
                        autoComplete="current-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Email />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        error={usernameError}
                        helperText={helperUsernameError}
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
                        error={passwordError}
                        helperText={helperPasswordError}
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
                    <TextField
                        error={passwordError}
                        helperText={helperPasswordError}
                        id="password-input-repeat"
                        label="Repeat Password"
                        type="password"
                        autoComplete="current-password"
                        value={passwordRepeat}
                        onChange={(e) => setPasswordRepeat(e.target.value)}
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
                    <Button endIcon={<SendIcon />} variant="contained" type={"submit"}>Register</Button>
                </Grid>
            </Grid>
        </form>);
}

ReactDOM.render(

    <React.StrictMode>
        <BrowserRouter>
            <Register />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('react')
)