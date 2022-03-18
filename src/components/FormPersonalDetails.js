
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// import { createTheme, ThemeProvider } from '@mui/material/styles'

// const theme = createTheme()

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

  render() {
    const { values, handleChange } = this.props;
    return (
    //   <ThemeProvider>
        <React.Fragment>
            <AppBar title="Enter Personal Details" />
            <TextField 
                hintText="Enter Your Occupation" 
                floatingLabelText="First Name"
                onChange={handleChange('firstName')}
                defaultValue={values.occupation}
            />

            <br/>
            <TextField 
                hintText="Enter Your city" 
                floatingLabelText="city"
                onChange={handleChange('city')}
                defaultValue={values.city}
            />

            <br/>
            <TextField 
                hintText="Enter Your Bioj" 
                floatingLabelText="Bio"
                onChange={handleChange('bio')}
                defaultValue={values.bio}
            />

            <br/>
            <RaisedButton 
              label="Continue"
              primary={true}
              style={styles.button}
              onClick={this.continue}
            />

            <br/>
            <RaisedButton 
              label="Back"
              primary={true}
              style={styles.button}
              onClick={this.back}
            />
        </React.Fragment>
      // </ThemeProvider>
    );
  }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails;