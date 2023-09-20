import React from 'react'
import { useRouter } from 'next/router'
import UploadFiles from '@/components/UploadFiles';
import ShowFiles from '@/components/ShowFiles';
import Navbar from '@/components/NavBar';
import { useFetchSession } from '@/hooks/useSession';

export default function Folder() {
    const {session} = useFetchSession();
    const router = useRouter();
    const parentId = router?.query.id;
  return (
    <div>
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
