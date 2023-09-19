import React from 'react'
import styles from './ShowFile.module.scss'
import { fetchFiles } from '@/hooks/useFetchFile'
import { AiFillFileText, AiFillFileExcel, AiFillFileImage, AiFillFileZip, AiFillFile } from 'react-icons/ai'

const ShowFiles = () => {
  let { fileList } = fetchFiles();
  const openFile = (fileLink: string) => {
      window.open(fileLink);
  }

  let re = /(?:\.([^.]+))?$/;
  const exec = (fileName: string) => {
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
      let stripped = fileName.substr(0, 10);
      return stripped
  } 

  return (
    <div className={styles.fileGrid}>
      {fileList.map((file: {imageLink: "", fileName: ""}) => {
        return (
          <div className={styles.major}>
            <div className={styles.files} onClick={() => openFile(file.imageLink)}>
              {exec(file.fileName)}
              <p className={styles.title}>{short(file.fileName)}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ShowFiles