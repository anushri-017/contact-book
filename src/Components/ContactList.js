import  React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Table,Paper,TableBody,TableCell,TableHead,
  TableContainer,TableRow,IconButton,TextField} from '@material-ui/core';
  import Avatar from "react-avatar"
import  {useSelector,useDispatch} from "react-redux";
import { deleteContact} from '../Redux/Actions/index';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import ContactHeader from '../Layouts/contactheader';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

 function ContactList() {
  const classes = useStyles();
  const  dispatch = useDispatch();
  const [search,setSearch] = useState("");
  const [selectAll,setSelectAll] = useState(false)
  const  contacts = useSelector(state => state.contacts)
 
const filterNames  = contacts.filter(contact =>{
   return contact.name.toLowerCase().includes(search.toLowerCase())
})

  return (
    <>
    <br/><ContactHeader/><br/><br/>
    <label className="text-info font-weight-bold label "><SearchIcon fontSize = 'large'/>
    <TextField className='standard-basic' value = {search} label ="Search by name"  type='text' onChange = {e => setSearch(e.target.value)}  required /></label><br/>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell><input type = "checkbox" /> </TableCell>
          <TableCell>Id:</TableCell>
            <TableCell>Contact-Name</TableCell>
            <TableCell >Contact-No:</TableCell>
            <TableCell>Email-Id:</TableCell>
            <TableCell >Address:</TableCell>
            <TableCell >City:</TableCell>
            <TableCell >Actions:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filterNames.map((row) => (
            <TableRow key={row.id}>
            <TableCell><input type = "checkbox"  cheacked ={selectAll} onCLick ={() => setSelectAll(!selectAll)}/> </TableCell>
            <TableCell>{row.id}</TableCell>
              <TableCell><Avatar   className = 'mr-2' name = {row.name} round = {true} size="40"/>{row.name}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell >{row.address}</TableCell>
              <TableCell >{row.city}</TableCell>
              <TableCell >
              <IconButton size="small" variant ="contained" color ="primary"  href={`/editContacts/ ${row.id}` } ><EditSharpIcon  fontSize="large"/></IconButton>
              <IconButton size="small" variant ="contained" color ="primary"  href={`/showContact/ ${row.id}` } ><VisibilityIcon  fontSize="large"/></IconButton>
              <IconButton size="small" variant ="contained" color ="primary"  onClick  = {()=>dispatch(deleteContact(row.id))} href="/" >
              <DeleteSharpIcon fontSize="large"/></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export  default ContactList;

   