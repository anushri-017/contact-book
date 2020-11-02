import { ADD_CONTACT, EDIT_CONTACT,UPDATE_CONTACT,SELECT_CONTACT,CLEAR_ALL, DELETE_CONTACT } from '../Constants/action-types';


const initialState = {
    contacts: [
        { id: "1", name: 'Anushri Soni', phone: "1111", email: "anushri@gmail.com", address: "raksha colony", city: "jbp" },
    ],
    contact: "",
    selectedContacts:''
}

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [
                    action.payload,
                    ...state.contacts
                ]
            }
        case EDIT_CONTACT:
            let arr = state.contacts.filter(contact => contact.id == action.payload);
            arr = arr.values();
            for (let val of arr) {
                arr = val;
            }
            return {
                ...state,
                contact: { arr }
            }
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact =>
                    contact.id == action.payload.id ? action.payload : contact)
            }
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter((contact => contact.id != action.payload))
            }
           case SELECT_CONTACT:
               return {
                   ...state,
                   selectedContacts:action.payload
               } 
            case CLEAR_ALL:
                return{
                    ...state
                }
        default:
            return state;
    }
}

export default contactReducer;