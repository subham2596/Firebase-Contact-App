import React from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { RiEditCircleLine } from 'react-icons/ri';
import { IoMdTrash } from 'react-icons/io';
import { db } from '../config/firebase';
import { toast } from 'react-toastify';

const ContactCard = ({contact, displayModal, setIsForEdit, setContactInfo}) => {

  const updateContact = () => {
    displayModal();
    setIsForEdit(true);
    setContactInfo(contact)
  }

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id))
      toast.success("Contact deleted successfully!");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div key={contact.id} className='w-full bg-red-400 p-2 rounded-md flex items-center justify-between'>
        <div className='flex gap-3 items-center'>
          <HiOutlineUserCircle className='text-white text-4xl' />
          <div className='justify-self-start'>
              <h2 className='font-medium'>{contact.name}</h2>
              <p>{contact.email}</p>
          </div>
        </div>
        <div className='text-4xl flex'>
            <RiEditCircleLine className='font-bold' onClick={()=>{updateContact(contact)}} />
            <IoMdTrash className='text-purple-800' onClick={()=>{deleteContact(contact.id)
            console.log(contact)}} />
        </div>
    </div>
  )
}

export default ContactCard;