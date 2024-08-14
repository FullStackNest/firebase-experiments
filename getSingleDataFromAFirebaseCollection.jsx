
// 1. Adding normal Data to Firebase collection

import { useState } from "react";
import { FIRESTORE } from "./firebase.config";
import { doc, getDoc } from 'firebase/firestore';

const [userData, setUserData] = useState([]);

const getSingleDataFromAFirebaseCollection = async () => {

    /* here "users" is the collection name &
       "FIRESTORE" is the Firebase/firestore's Instance which is imported at top.
   */
    let response = await getDoc(doc(FIRESTORE, "users", documentIDFromCollection));

    setUserData(response.data());
}