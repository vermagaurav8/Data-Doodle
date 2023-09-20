import React, {ChangeEvent, useState} from 'react'
import styles from "./Upload.module.scss"
import Button from '../common/Button/Button'
import { fileUpload } from '../Api/FileUpload'
import ProgressBar from '../common/Progress'
import { addFolder } from '../Api/Firestore'
import { useFetchSession } from '@/hooks/useSession'

const UploadFiles = ({parentId}: Folder) => {
  let {session} = useFetchSession();
  const [isFileVisible, setFileVisible] = useState(false);
  const [isFolderVisible, setisFolderVisible] = useState(false);
  const [folderName, setFolderName] = useState('');
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState({});
  
  const uploadFile = (event: ChangeEvent<HTMLInputElement>) => {
    let file = event.target.files?.[0];
    fileUpload(file, setProgress, parentId, session?.user.email as string)
  }

  const uploadFolder = () => {
    const payload = {
      folderName: folderName,
      isFolder: true,
      fileList: [],
      parentId: parentId || "",
      userEmail: session?.user.email
    }

    addFolder(payload)
    setFolderName("")
  }

  return (
    <div className={styles.uploadMain}>
        <Button onClick={() => {
            setFileVisible(!isFileVisible)
            setisFolderVisible(false) 
          }} 
          title="Add a File"  
          btnClass='btn-primary' 
        />
        { isFileVisible ? (
            <input onChange={(event) => uploadFile(event)} type='file' className='file-input w-full max-w-xs'/>
          ) : (<></>) }

        <Button onClick={() => {
            setisFolderVisible(!isFolderVisible)
            setFileVisible(false)
          }} 
          title="Add a Folder"  
          btnClass='btn-success btn-outline' 
        />
        {isFolderVisible ? 
          <>
            <input 
              type='text' 
              onChange={(event) => setFolderName(event?.target.value)} 
              value={folderName} 
              placeholder='Folder Name' 
              className='input input-bordered input-accent w-full max-w-xs' 
            /> 
            <Button onClick={uploadFolder} title='Create'btnClass='btn-success' />
          </> :
          <></>
        }
        {progress === 0 || progress === 100 ? <></> : <ProgressBar progress={progress}/>}
    </div>
  )
}

export default UploadFiles