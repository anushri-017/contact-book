import  React, { useState,useEffect} from 'react';
import {useHistory,useParams} from "react-router-dom";
import { Paper,Button ,TextField} from "@material-ui/core";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import HomeIcon from '@material-ui/icons/Home';
import  {useDispatch,useSelector} from "react-redux";
import {editContact, updateContact} from  "../Redux/Actions/index";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));


function EditContacts (){
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  let  {id} = useParams();
  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  const [open, setOpen] = React.useState(false);
  const [email,setEmail] = useState("");
  const [address,setAddress] = useState("");
  const [city,setCity] = useState("");
  const contact = useSelector(state => state.contact)
    

  useEffect(()=>{
    if(contact !=null){
      setName(contact.name);
      setPhone(contact.phone);
      setEmail(contact.email);
      setAddress(contact.address);
      setCity(contact.city);
    }
    dispatch(editContact(id));
  },[contact]);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
  };
   const onUpdate  = (e) =>{
     e.preventDefault();
     const  update_contact = Object.assign(contact,{
       name:name,phone:phone,email:email,address:address,city:city
     })
     dispatch(updateContact(update_contact))
   }
      return(
          <>
          <br /><Paper elevation={9} variant="outlined" square >
            <h1>EditContacts<span role = "img"  aria-label =  "Pencil">✏️</span></h1>
            <Button onClick={handleClickOpen}>Open  EDIT <span role = "img"  aria-label =  "Pencil">✏️</span></Button>
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
              <DialogTitle>Fill the form</DialogTitle>
              <DialogContent>
            <form className={classes.container}>
            <label className="text-info font-weight-bold label "><AccountBoxIcon fontSize='large'/>
            <TextField className='standard-basic' value = {name} onChange={(e)=>setName(e.target.value)} label ="UserName"  variant="outlined"  type='text'  required /></label><br/>
            <label className="text-info font-weight-bold label "><PhoneIcon fontSize='large'/>
            <TextField className='standard-basic' value = {phone} onChange={(e)=>setPhone(e.target.value)}  label ="Contact"  variant="outlined"  type='text'  required /></label><br/>
            <label className="text-info font-weight-bold label "><EmailIcon fontSize='large'/>
            <TextField className='standard-basic'   value = {email} onChange={(e)=>setEmail(e.target.value)}   label ="Email-Id" variant="outlined"  type='text'  required /></label><br/>
            <label className="text-info font-weight-bold label "><HomeIcon fontSize='large'/>
            <TextField className='standard-basic' value = {address} onChange={(e)=>setAddress(e.target.value)}  label ="Address"  variant="outlined"  type='text'  required /></label><br/>
            <label className="text-info font-weight-bold label "><LocationCityIcon fontSize="large"/>
            <TextField className='standard-basic' value = {city}  onChange={(e)=>setCity(e.target.value)}  label ="City"  variant="outlined"  type='text'  required /></label>
            <br/><br/>
            <Button size="large" variant ="contained" color ="primary"  href= "/contacts" onClick = {(e) => onUpdate(e)}>
            Update</Button><br/><br/>     
            </form></DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleClose} color="primary">
                Ok
              </Button>
            </DialogActions>
          </Dialog>
          </Paper>
            </>

      )
  }
export  default  EditContacts;
