
// 1. Adding normal Data to Firebase collection

import { useState } from "react";
import { FIRESTORE } from "./firebase.config";
import { collection, getDocs } from 'firebase/firestore';

const [userData, setUserData] = useState([]);

const getAllDataFromAFirebaseCollection = async () => {

    /* here "users" is the collection name &
       "FIRESTORE" is the Firebase/firestore's Instance which is imported at top.
   */
    let response = await getDocs(collection(FIRESTORE, "users"));
    let TEMP = [];
    response.forEach(doc => {
        let data = {
            id: doc.id,
            info: doc.data()
        }
        // console.log(`${doc.id} => ${doc.data()}`);
        TEMP.push(data);
    })
    setUserData(TEMP);
}