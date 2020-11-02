import  React,{useState} from 'react';
import  {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import {Table,TableBody,TableCell,TableHead,TableRow,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from "react-avatar"

const useStyles = makeStyles({
    table: {
      minWidth: 500,
    },
  });

function ShowContact(){
   const classes = useStyles();
   const history = useHistory();
  const  contacts = useSelector(state => state.contacts)
  const [open, setOpen] = useState(true);


  const handleClose = () => {
    setOpen(false);
    history.push('/');
  }

  return(
<>
<Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
<DialogTitle>Showing Users Details.......</DialogTitle>
<DialogContent>
<Table className={classes.table} aria-label="simple table">
<TableHead>
  <TableRow>
  <TableCell>Id:</TableCell>
    <TableCell>Contact-Name</TableCell>
    <TableCell >Contact-No:</TableCell>
    <TableCell>Email-Id:</TableCell>
    <TableCell >Address:</TableCell>
    <TableCell >City:</TableCell>
  </TableRow>
</TableHead>
<TableBody>
  {contacts.map((row) => (
    <TableRow key={row.id}>
    <TableCell>{row.id}</TableCell>
      <TableCell><Avatar   className = 'mr-2' name = {row.name} round = {true} size="40"/>{row.name}</TableCell>
      <TableCell>{row.phone}</TableCell>
      <TableCell>{row.email}</TableCell>
      <TableCell >{row.address}</TableCell>
      <TableCell >{row.city}</TableCell>
      </TableRow>
          ))}
        </TableBody>
      </Table>
</DialogContent>
<DialogActions>
<Button onClick={handleClose} color="primary">
  Cancel
</Button>
<Button onClick={handleClose} color="primary">
  Ok
</Button>
</DialogActions>
</Dialog>
</>
)
}

export default ShowContact;