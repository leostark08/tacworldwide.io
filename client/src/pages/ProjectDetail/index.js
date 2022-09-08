import React from 'react';
import classNames from 'classnames/bind';
import styles from './ProjectDetail.module.scss';
import { useParams } from 'react-router-dom';

const project = [];

const cx = classNames.bind(styles);
function ProjectDetail() {
    let { alias } = useParams();
    return (
        <>
            <div className={cx('hero')}>
                <span className={cx('hero', 'heading--super', 'project-hero')}>
                    OUR<br></br>PROJECTS
                </span>
            </div>
            <div className={cx('content-container')}>{alias}</div>
        </>
    );
}

export default ProjectDetail;
