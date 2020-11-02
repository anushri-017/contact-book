import React, {useState } from 'react';
import {useHistory} from "react-router-dom";
import { Paper,Button ,TextField} from "@material-ui/core";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import HomeIcon from '@material-ui/icons/Home';
import  {useDispatch} from "react-redux";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import shortid from "shortid";
import {addContact} from  "../Redux/Actions/index";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

  function AddContacts (){
    const classes = useStyles();
    const history = useHistory();
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [address,setAddress] = useState("");
    const [city,setCity] = useState("");
    const dispatch = useDispatch();
    
   const createContact = (e) =>{
     e.preventDefault();
      const  new_contact = {
        id:shortid.generate(),
        name:name,
       phone:phone,
        email:email,
        address:address,
        city:city
      };
      dispatch(addContact(new_contact));
      history.push('/contacts')
   }
   const handleChange = (event) => {
    setCity(event.target.value);
  };
    
    return (
      <>
        <br /> <Paper elevation={9} variant="outlined" square >
          <h1>Create New Contact <span role="img" aria-label="Mobile Phone">📱</span> </h1>
          <form>
          <label className="text-info font-weight-bold label "><AccountBoxIcon fontSize='large'/>
          <TextField className='standard-basic' value = {name} onChange={(e)=>setName(e.target.value)} label ="UserName"  variant="outlined"  type='text'  required /></label><br/>
          <label className="text-info font-weight-bold label "><PhoneIcon fontSize='large'/>
          <TextField className='standard-basic' value ={phone} onChange={(e)=>setPhone(e.target.value)}  label ="Contact"  variant="outlined"  type='text'  required /></label><br/>
          <label className="text-info font-weight-bold label "><EmailIcon fontSize='large'/>
          <TextField className='standard-basic'   value = {email} onChange={(e)=>setEmail(e.target.value)}   label ="Email-Id" variant="outlined"  type='text'  required /></label><br/>
          <label className="text-info font-weight-bold label "><HomeIcon fontSize='large'/>
          <TextField className='standard-basic' value = {address} onChange={(e)=>setAddress(e.target.value)}  label ="Address"  variant="outlined"  type='text'  required /></label><br/>
          <label className="text-info font-weight-bold label "><LocationCityIcon fontSize="large"/> 
          <InputLabel id="demo-simple-select-filled-label" placeholder = "enter your city"> City</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={city}
            onChange={handleChange}
          >
            <MenuItem value="select your city">
              <em></em>
            </MenuItem>
            <MenuItem value={"Jabalpur"}>Jabalpur</MenuItem>
            <MenuItem value={"Indore"}>Indore</MenuItem>
            <MenuItem value={"Bhopal"}>Bhopal</MenuItem>
          </Select></label>
          <br/><br/>
          <Button size="large" variant ="contained" color ="primary" onClick = {(e) => createContact(e)}  href = "#">ADD</Button><br/><br/>     
          </form>
        </Paper>
      </>
    )
  }
 
export default AddContacts;
