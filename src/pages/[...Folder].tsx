import React from 'react'
import { useRouter } from 'next/router'
import UploadFiles from '@/components/UploadFiles';
import ShowFiles from '@/components/ShowFiles';
import Navbar from '@/components/NavBar';
import { useFetchSession } from '@/hooks/useSession';
import Lottie from 'lottie-react';
import doodle from '../components/animation_lmsvf7hp.json'
import styles  from './Folder.module.scss';

export default function Folder() {
    const {session} = useFetchSession();
    const router = useRouter();
    const parentId = router?.query.id;
  return (
    <div>
      <Lottie animationData={doodle} className={styles.Lottie}/>
      <Navbar />
      {session ? (
        <>
          <UploadFiles parentId={parentId} />
          <ShowFiles parentId={parentId} />
        </>
      ) 
      : (<></>)}
    </div>
  )
}
