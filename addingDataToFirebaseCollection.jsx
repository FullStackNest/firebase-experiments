

// 1. Adding normal Data to Firebase collection

import { useState } from "react";
import { FIRESTORE } from "./firebase.config";
import { collection, addDoc } from 'firebase/firestore';

const [userInput, setUserInput] = useState({
    name: "",
    age: "",
    location: "",
    college: ""
});

const addDataToFirebaseCollection = async () => {

    /* here "users" is the collection name & 
        "FIRESTORE" is the Firebase/firestore's Instance which is imported at top.
    */
    await addDoc(collection(FIRESTORE, "users"), {
        ...userInput, // your data in react's state

    }).then(() => {
        alert("Submitted");
    }).catch(err => {
        console.log(err);
    })
}