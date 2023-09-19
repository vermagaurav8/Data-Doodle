import React from 'react'
import styles from './Progress.module.scss'

export default function ProgressBar({progress} : Progress) {
    return (
        <div className={styles.ProgressBar}>
            <progress
                className='progress progress-accent w-56'
                value={progress}
                max={100}
            >
            </progress>
            <span className={styles.percentage}>{progress}%</span>
        </div>
    )
}