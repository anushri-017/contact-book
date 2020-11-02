import {ADD_CONTACT,EDIT_CONTACT,SELECT_CONTACT,CLEAR_ALL
,UPDATE_CONTACT,DELETE_CONTACT} from '../Constants/action-types';

export  const  addContact = (data) => {
    return {
        type:ADD_CONTACT,
        payload:data
    }
}

export  const  editContact = (id) => (
    {
        type:EDIT_CONTACT,
        payload:id
    }
)
export const updateContact = (contact) =>({
    type:UPDATE_CONTACT,
    payload:contact
})

export const deleteContact = (id) =>({
    type:DELETE_CONTACT,
    payload:id
})

export const selectAllContacts= (id) =>({
    type:SELECT_CONTACT,
    payload:id
})

export const clearAllContact = () =>({
    type:CLEAR_ALL
})
