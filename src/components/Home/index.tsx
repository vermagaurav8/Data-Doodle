import React from 'react'
import styles from "./Home.module.scss";
import Navbar from '../NavBar';
import UploadFiles from '../UploadFiles';

const HomeComponent = () => {
    return (
        <div>
            <Navbar />
            <UploadFiles />
        </div>
    )
}

export default HomeComponent