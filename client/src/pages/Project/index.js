import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Project.module.scss';

import strategy from '../../assets/images/about-us/strategy.jpg';
import academy from '../../assets/images/about-us/academy.jpg';
import marketing from '../../assets/images/about-us/marketing.jpeg';
import ProjectCard from '~/components/Layouts/components/ProjectCard';
import Pagnition from '~/components/Layouts/components/Pagnition';

const cx = classNames.bind(styles);

const works = [
    {
        name: 'Project name',
        client: 'Client',
        role: 'Main role',
        cover: strategy,
    },
    {
        name: 'Project name',
        client: 'Client',
        role: 'Main role',
        cover: academy,
    },
    {
        name: 'Project name',
        client: 'Client',
        role: 'Main role',
        cover: marketing,
    },
    {
        name: 'Project name',
        client: 'Client',
        role: 'Main role',
        cover: academy,
    },
    {
        name: 'Project name',
        client: 'Client',
        role: 'Main role',
        cover: marketing,
    },
    {
        name: 'Project name',
        client: 'Client',
        role: 'Main role',
        cover: strategy,
    },
];

function Project() {
    return (
        <>
            <div className={cx('hero')}>
                <span className={cx('hero', 'heading--super')}>
                    OUR<br></br>PROJECTS
                </span>
            </div>
            <div className={cx('content-container')}>
                <section className={cx('projects')}>
                    {works.map((work, i) => (
                        <ProjectCard
                            cover={work.cover}
                            name={work.name}
                            client={work.client}
                            role={work.role}
                        ></ProjectCard>
                    ))}
                </section>
                <Pagnition total={12} amount={6} active={1}></Pagnition>
            </div>
        </>
    );
}

export default Project;
