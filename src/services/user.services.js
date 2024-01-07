import { db } from "../config/firebase";

import { addDoc, deleteDoc, updateDoc, getDocs, getDoc, doc, collection } from "firebase/firestore";

const contactRef = collection(db, "contacts")
class UserServicesCRUD {

    addUser = (newContact) => {
        return addDoc(contactRef, newContact)
    }

    updateUser = (id, updatedUser) => {
        const userInfo = doc(db, "contacts", id)
        return updateDoc(userInfo, updatedUser)
    }

    deleteUser = (id) => {
        const userInfo = doc(db, "contacts", id)
        return deleteDoc(userInfo)
    }

    getAllUsers = () => {
        return getDocs(contactRef)
    }

    getParticularUser = (id) => {
        const userInfo = doc(db, "contacts", id)
        return getDoc(userInfo);
    }

}

export default new UserServicesCRUD();