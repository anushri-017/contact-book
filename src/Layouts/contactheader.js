import React from 'react';
import {AppBar,Toolbar,Typography,IconButton, Button,Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ContactsSharpIcon from '@material-ui/icons/ContactsSharp';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow:1,
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }));

  function ContactHeader() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
      <Container>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <ContactsSharpIcon/>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Contacts
            </Typography>
            <Button color="inherit" variant = 'outlined' href = "/addContacts">Add Contacts</Button>          
            </Toolbar>
        </AppBar>
        </Container>
      </div>
    );
  }

  export default  ContactHeader;