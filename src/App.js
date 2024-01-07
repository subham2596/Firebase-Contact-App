import { useState } from 'react';
import './App.css';
import ActionItems from './components/ActionItems';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Modal from './components/Modal';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [showModal, setShowModal] = useState(false)
  const [isForEdit, setIsForEdit] = useState(false)
  const [contacts, setContacts] = useState([])
  const [contactInfo, setContactInfo] = useState([])
  const [filteredContacts, setFilteredContacts] = useState([])
  const displayModal = () => {
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
  }
  return (
    <>
      <div className='px-4 py-3 max-w-lg mx-auto'>
        <Header />
        <ActionItems displayModal={displayModal} setIsForEdit={setIsForEdit} contacts={contacts} setFilteredContacts={setFilteredContacts} />
        <MainContainer displayModal={displayModal} setIsForEdit={setIsForEdit} contacts={contacts} setContacts={setContacts} setContactInfo={setContactInfo} filteredContacts={filteredContacts} setFilteredContacts={setFilteredContacts}/>
      </div>
      <div>
        <Modal isForEdit={isForEdit} showModal={showModal} closeModal={closeModal} contactInfo={contactInfo} />
      </div>
      <ToastContainer position='bottom-center' />
    </>
  );
}

export default App;
