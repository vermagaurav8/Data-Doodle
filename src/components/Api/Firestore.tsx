import { database } from "@/firebaseConfig"
import { collection, addDoc } from "firebase/firestore"

let files = collection(database, "files")

export const addFiles = (imageLink: string, fileName: string, parentId: string, userEmail: string) => {
    try{
        addDoc(files, {
            imageLink: imageLink,
            fileName: fileName,
            isFolder: false,
            parentId: parentId,
            userEmail: userEmail
        })
    } catch(error) {
        console.log(error);
    }
}

export const addFolder = (payload: {}) => {
    try{
        addDoc(files, {
            ...payload
        })
    } catch(error) {
        console.log(error);
    }
}

