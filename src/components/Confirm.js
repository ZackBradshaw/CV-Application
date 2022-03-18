import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { list, ListItem } from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Confirm from './Confirm'

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
    const { values, handleChange {firstName, lastName, email, occcupation, city, bio}} = this.props;
    return (
      <ThemeProvider>
        <React.Fragment>
            <AppBar title="Confirm User Data" />
            <list>
                <listItem
                   primaryText="First Name"
                   secondary={ firstName } 
                />
                <listItem
                   primaryText="Last Name"
                   secondary={ lastName} 
                />
                <listItem
                   primaryText="Email"
                   secondary={ email } 
                />
                <listItem
                   primaryText="Occupation"
                   secondary={ occcupation } 
                />
                <listItem
                   primaryText="City"
                   secondary={ city } 
                />
                <listItem
                   primaryText="Bio"
                   secondary={ bio } 
                />
            </list>
            <br/>
            <RaisedButton 
              label="Confirm & Conitinue"
              primary={true}
              style={styles.button}
              onClick={this.continue}
            />
            <RaisedButton 
              label="Back"
              primary={false}
              style={styles.button}
              onClick={this.continue}
            />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}
const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails;