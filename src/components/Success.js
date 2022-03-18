
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme()

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


  render() {
    return (
      <ThemeProvider>
        <React.Fragment>
            <AppBar title="Success" />
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instruction</p>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default FormUserDetails;