

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
    await addDoc(collection(FIRESTORE, "users"), {
        ...userInput, // your data in react's state

    }).then(() => {
        alert("Submitted");
    }).catch(err => {
        console.log(err);
    })
}