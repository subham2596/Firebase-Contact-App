import React, { useEffect, useState } from 'react'
import NoContactFound from './NoContactFound'
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from '../config/firebase';
import ContactCard from './ContactCard';

const MainContainer = ({displayModal, setIsForEdit, contacts,  setContacts, setContactInfo, filteredContacts, setFilteredContacts}) => {

    // const [contacts, setContacts] = useState([])

    useEffect(()=>{
        const getContact = async () => {
            try{
                const contactRef = collection(db, "contacts");

                onSnapshot(contactRef, (snapshot) => {
                    const contactList = snapshot.docs.map((doc)=>{
                        return {
                            id: doc.id,
                            ...doc.data()
                        }
                    })
                    setContacts(contactList);
                    setFilteredContacts(contactList);
                    return contactList;
                })
                
            } catch(error) {
                console.log(error)
            }
        }

        getContact();
    }, [])

  return (
    <div>
        {(!contacts)? <NoContactFound /> :
        <div className='flex flex-col gap-3 mt-4'>
            {filteredContacts.map((contact)=>{
                return(
                    <ContactCard key={contact.id} contact={contact} displayModal={displayModal} setIsForEdit={setIsForEdit} setContactInfo={setContactInfo} />
                )
            })}
        </div>}
    </div>
  )
}

export default MainContainer