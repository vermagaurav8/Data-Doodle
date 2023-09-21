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
                (<div className="dropdown dropdown-end">
                    <img 
                        className={styles.profileImg}
                        src={session?.user.image as string}
                        tabIndex={0}
                    />
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li className={styles.Button}><Button 
                            onClick={() => signOut()} 
                            btnClass='btn-secondary' 
                            title='Sign Out'
                        /></li>
                    </ul>
                </div>
    
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

