import { addDoc, collection } from 'firebase/firestore';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import { createPortal } from 'react-dom';
import {AiOutlineClose} from 'react-icons/ai'
import { db } from '../config/firebase';

import UserServicesCRUD from '../services/user.services';
import { toast } from 'react-toastify';

import * as Yup from 'yup';

const contactSchemaValidation = Yup.object({
    name: Yup.string().required("Name is required!"),
    email: Yup.string().email("Invalid email!").required("Email is required!")
})

const Modal = ({showModal, closeModal, isForEdit, contactInfo}) => {
    console.log("contactInfo -->", contactInfo);
    const addContact = async (newContact) => {
        const conatactRef = collection(db, "contacts");
        await addDoc(conatactRef, newContact);
        console.log(newContact);
        closeModal();
        toast.success("Contact added successfully!");
    }

    const updateContact = async (id, updatedUser) => {
        await UserServicesCRUD.updateUser(id, updatedUser);
        closeModal();
        toast.success("Contact updated successfully!");
    }

  return createPortal (
    <>
        {
            showModal &&
            <div className="modalContainer backdrop-blur w-screen h-screen absolute top-0 grid place-content-center">
                <div className='max-w-2xl max-h-96 rounded-md bg-white p-3'>
                    <div className='flex justify-end'>
                    <AiOutlineClose className='cursor-pointer' onClick={closeModal} />
                    </div>
                    <Formik validationSchema={contactSchemaValidation}
                    initialValues={
                        
                        isForEdit ? {
                            name: contactInfo.name,
                            email: contactInfo.email
                        } : 
                        {
                            name: "",
                            email: ""
                        }
                } onSubmit={(values) => {
                    isForEdit ? updateContact(contactInfo.id, values)
                            :   addContact(values)
                    }}>
                        <Form className='flex flex-col gap-3'>
                            <label htmlFor="name">Name</label>
                            <Field name="name" className='border border-black px-2 py-1 rounded-md' type="text" />
                            <div className='text-red-500 text-xs'>
                                <ErrorMessage name="name" />
                            </div>
                            <label htmlFor="email">Email</label>
                            <Field name="email"  className='border border-black px-2 py-1 rounded-md' type="text" />
                            <div className='text-red-500 text-xs'>
                                <ErrorMessage name="email" />
                            </div>
                            <button className='bg-purple-600 px-3 py-1 border rounded-lg self-center'>{isForEdit ? "Update" : "Add"} Details</button>
                        </Form>
                    </Formik>
                    
                </div>
            </div>
        }
    </>,
    document.getElementById('modal-root')
  )
}

export default Modal