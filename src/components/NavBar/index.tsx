import React from 'react'
import { useFetchSession } from '@/hooks/useSession'
import Button from "@/components/common/Button/Button";
import { signIn, signOut } from "next-auth/react"
import styles from "./NavBar.module.scss";

export default function Navbar() {
    let {session} = useFetchSession();
    return (
        <div className={styles.authBtn}>
            {session ?           
                (
                    <img 
                        onClick={() => signOut()}
                        className={styles.profileImg}
                        src={session?.user.image as string}
                    />
                ) : (
                    <Button 
                        onClick={() => signIn()} 
                        btnClass='btn-primary' 
                        title='Sign Up'
                    />
                )
            }
        </div>
    )
}

