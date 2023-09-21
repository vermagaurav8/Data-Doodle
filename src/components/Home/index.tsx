import React from 'react'
import styles from "./Home.module.scss";
import Navbar from '../NavBar';
import UploadFiles from '../UploadFiles';
import ShowFiles from '../ShowFiles';
import Lottie from 'lottie-react';
import doodle from '../animation_lmsvf7hp.json'

const HomeComponent = () => {
    return (
        <div>
            <Lottie animationData={doodle} className={styles.Lottie}/>
            <Navbar />
            <UploadFiles parentId="" />
            <ShowFiles parentId=""/>
        </div>
    )
}

export default HomeComponent