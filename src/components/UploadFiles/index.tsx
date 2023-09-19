import React, {ChangeEvent, useState} from 'react'
import styles from "./Upload.module.scss"
import Button from '../common/Button/Button'
import { fileUpload } from '../Api/FileUpload'

const UploadFiles = () => {
  const [isFileVisible, setFileVisible] = useState(false);
  const [file, setFile] = useState({});
  const uploadFile = (event: ChangeEvent<HTMLInputElement>) => {
    let file = event.target.files?.[0];
    fileUpload(file)
  }

  return (
    <div className={styles.uploadMain}>
        <Button onClick={() => setFileVisible(!isFileVisible)} title="Add a File"  btnClass='btn-primary' />
        { isFileVisible ? (
            <input onChange={(event) => uploadFile(event)} type='file' className='file-input w-full max-w-xs'/>
          ) : (<></>) }
        <Button title="Create a Folder"  btnClass='btn-success btn-outline' />
    </div>
  )
}

export default UploadFiles