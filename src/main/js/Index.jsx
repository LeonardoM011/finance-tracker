const React = require('react');
const ReactDOM = require('react-dom');
import { Grid, Button } from '@material-ui/core';
import "./Index.css";

function Index() {
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
        </Grid>);
}

ReactDOM.render(
    <React.StrictMode>
        <Index />
    </React.StrictMode>,
    document.getElementById('react')
)
