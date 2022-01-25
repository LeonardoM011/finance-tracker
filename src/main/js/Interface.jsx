const React = require('react');
import { Grid, Button } from '@material-ui/core';
import "./Interface.css";

function Interface() {
    return(
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <h1>Finance Tracker</h1>
            </Grid>
            <Grid item xs={12}>
                <h2>Unesite trošak</h2>
            </Grid>
            <Grid item xs={6}>
                <Button color="primary">Hello World</Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained">Hello World</Button>
            </Grid>
        </Grid>)
}

export default Interface;
