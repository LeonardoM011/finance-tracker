import {AccountCircle} from "@mui/icons-material";

const React = require('react');
import {Grid, Button, TextField, FormControl, InputAdornment, Input} from '@material-ui/core';
import SendIcon from '@mui/icons-material/Send';
const ReactDOM = require('react-dom');
import "./Login.css";

function Login() {
    return (
        <FormControl>
            <Grid container spacing={2} id={"wrapper"}>
                <Grid item xs={12}>
                    <h1>Finance Tracker</h1>
                    <h3>Ulogirajte se</h3>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="username"
                        label="Username"
                        autoComplete="current-username"
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        startAdornment={
                            <InputAdornment position="start">
                                <Lock />
                            </InputAdornment>
                        }
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button endIcon={<SendIcon />} variant="contained" color="success" type={"submit"}>Login</Button>
                </Grid>
            </Grid>
        </FormControl>);
}

ReactDOM.render(
    <React.StrictMode>
        <Login />
    </React.StrictMode>,
    document.getElementById('react')
)