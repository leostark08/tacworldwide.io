import React from 'react';
import classNames from 'classnames/bind';
import styles from './Project.module.scss';

import ProjectCard from '~/layouts/components/ProjectCard';
import Pagination from '~/layouts/components/Pagination';

// project covers
import project1 from '../../assets/images/projects/fastgreat.jpg';
import project2 from '../../assets/images/projects/project2.jpg';
import project3 from '../../assets/images/projects/project3.jpg';
import project4 from '../../assets/images/projects/project4.jpg';
import project5 from '../../assets/images/projects/project5.jpg';
import project6 from '../../assets/images/projects/project6.jpg';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const works = [
    {
        name: 'Fastgreat Marketing',
        client: 'Fastgreat',
        role: 'Social Media',
        cover: project1,
        alias: 'fastgreat-marketing',
    },
    {
        name: 'Hyundai PR',
        client: 'Hyundai',
        role: 'Data-driven Marketing',
        cover: project2,
        alias: 'fastgreat-marketing',
    },
    {
        name: 'Suzuki Event',
        client: 'Suzuki',
        role: 'Integrated Digital Marketing',
        cover: project3,
        alias: 'fastgreat-marketing',
    },
    {
        name: 'Toyota Marketing',
        client: 'Toyota',
        role: 'Branding Strategy & Creative',
        cover: project4,
        alias: 'fastgreat-marketing',
    },
    {
        name: 'Unilever PR',
        client: 'Unilever',
        role: 'Integrated Digital Marketing',
        cover: project5,
        alias: 'fastgreat-marketing',
    },
    {
        name: 'Generali',
        client: 'Generali',
        role: 'Branding Strategy & Creative',
        cover: project6,
        alias: 'fastgreat-marketing',
    },
];

function Project() {
    return (
        <>
            <div className={cx('hero')}>
                <span className={cx('hero', 'heading--super', 'project-hero')}>
                    OUR<br></br>PROJECTS
                </span>
            </div>
            <div className={cx('content-container')}>
                <section className={cx('projects')}>
                    {works.map((work, i) => (
                        <Link to={work.alias} className={cx('projects__item')}>
                            <ProjectCard
                                key={i}
                                cover={work.cover}
                                name={work.name}
                                client={work.client}
                                role={work.role}
                            ></ProjectCard>
                        </Link>
                    ))}
                </section>
                <Pagination total={12} amount={6} active={1}></Pagination>
            </div>
        </>
    );
}

export default Project;
