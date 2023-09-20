import React, { useState } from 'react'
import styles from './ShowFile.module.scss'
import { fetchFiles } from '@/hooks/useFetchFile'
import { useRouter } from 'next/router'
import { AiFillFileText, AiFillFileExcel, AiFillFileImage, AiFillFileZip, AiFillFile } from 'react-icons/ai'
import { BsFillFolderFill } from 'react-icons/bs'
import { useFetchSession } from '@/hooks/useSession'

const ShowFiles = ({parentId}: Folder) => {
  let { session } = useFetchSession();
  let { fileList } = fetchFiles(parentId, session?.user.email as string);
  const router = useRouter();
  const openFile = (fileLink: string) => {
      window.open(fileLink);
  }

  let re = /(?:\.([^.]+))?$/;
  const fileType = (fileName: string) => {
    const match = re.exec(fileName);
    let ext = match ? match[1] : null;
      if(ext === 'jpg' || ext === 'jpeg' || ext === 'png' || ext === 'gif' ){
        return (<AiFillFileImage size={80} color='#020617' />);
      } else if(ext === 'pdf' || ext === 'docx') {
        return (<AiFillFileText size={80} color='#020617' />);
      } else if(ext === 'zip') {
        return (<AiFillFileZip size={80} color='#020617' />);
      } else if(ext === 'xlsx') {
        return (<AiFillFileExcel size={80} color='#020617' />);
      } else {
        return (<AiFillFile size={80} color='#020617' />);
      }
  }

  const short = (fileName: string) => {
      let stripped = fileName.substr(0, 15);
      return stripped
  } 

  return (
    <div className={styles.fileGrid}>
      {fileList.map((file: {imageLink: "", fileName: "", isFolder: false, folderName: "", id: ""}) => {
        return (
          <div className={styles.major} key={file.id}>
              { file.isFolder ? 
                <div 
                  className={styles.files} 
                  onClick={() => router.push(`/folder?id=${file.id}`)}
                >
                  <BsFillFolderFill size={80} color='#020617' />  
                  <p className={styles.title}>{short(file.folderName)}</p>
                </div>
                : 
                <div className={styles.files} onClick={() => openFile(file.imageLink)}>
                 {fileType(file.fileName)}
                 <p className={styles.title}>{short(file.fileName)}</p> 
                </div>
              }
          </div>
        )
      })}
    </div>
  )
}

export default ShowFiles