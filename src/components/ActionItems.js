import React from 'react'
import { IoMdSearch } from 'react-icons/io';
import { IoMdAddCircle } from 'react-icons/io';

const ActionItems = ({displayModal, setIsForEdit, contacts, setFilteredContacts
}) => {

  const clickOnPlusIcon = () => {
    setIsForEdit(false)
    displayModal();
  }

  const filterContact = (e) => {
    console.log("e.target.value", e.target.value)
    
    let filteredContactList = contacts.filter((contact)=>{
      return contact.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    console.log("filteredContactList", filteredContactList)
    setFilteredContacts(filteredContactList);
  }

  return (
    <div className='flex items-center justify-between mt-3'>
        <div className='searchbox flex relative'>
            <IoMdSearch className='text-white text-2xl absolute left-2 top-[50%] -translate-y-1/2' />
            <input type="text" className='bg-transparent border border-white rounded-md ps-9 pe-2 py-2' onChange={filterContact}/>
        </div>
        <div>
            <IoMdAddCircle className='text-white text-5xl' onClick={clickOnPlusIcon} />
        </div>
    </div>
  )
}

export default ActionItems;