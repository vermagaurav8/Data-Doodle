import React from 'react'
import styles from "./Home.module.scss";
import Navbar from '../NavBar';
import UploadFiles from '../UploadFiles';
import ShowFiles from '../ShowFiles';

const HomeComponent = () => {
    return (
        <div>
            <Navbar />
            <UploadFiles />
            <ShowFiles />
        </div>
    )
}

export default HomeComponent