
import { collection, getCountFromServer } from "firebase/firestore";
import { FIRESTORE } from "./firebase.config";


// collectionName: is the parameter that you will pass
const getSizeOfCollection = async (collectionName) => {

    const collectionReference = collection(FIRESTORE, collectionName);
    const snapshot = await getCountFromServer(collectionReference);

    return snapshot.data().count;
}