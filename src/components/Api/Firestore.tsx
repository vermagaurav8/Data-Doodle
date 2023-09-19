import { database } from "@/firebaseConfig"
import { collection, addDoc } from "firebase/firestore"

let files = collection(database, "files")

export const addFiles = (imageLink: string, fileName: string) => {
    try{
        addDoc(files, {
            imageLink: imageLink,
            fileName: fileName
        })
    } catch(error) {
        console.log(error);
    }
}

