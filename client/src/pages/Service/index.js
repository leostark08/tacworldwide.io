import React, { useState, useEffect } from 'react';
import styles from './Service.module.scss';
import ServiceCard from '~/components/Layouts/components/ServiceCard';
import classNames from 'classnames/bind';
import diageo from '../../assets/images/logo/diageo.png';
import fasgreat from '../../assets/images/logo/fasgreat.png';
import generali from '../../assets/images/logo/generali.png';
import honda from '../../assets/images/logo/honda.png';
import hyundai_tc_motor from '../../assets/images/logo/hyundai-tc-motor.png';
import isuzu from '../../assets/images/logo/isuzu.png';
import kao from '../../assets/images/logo/kao.png';
import keep_working_club from '../../assets/images/logo/keep-working-club.png';
import schneider from '../../assets/images/logo/schneider.png';
import suzuki from '../../assets/images/logo/suzuki.png';
import timebeat from '../../assets/images/logo/timebeat.png';
import timebit from '../../assets/images/logo/timebit.png';
import timebit_otc from '../../assets/images/logo/timebit-otc.png';
import toyota from '../../assets/images/logo/toyota.png';
import unilever from '../../assets/images/logo/unilever.png';
import academy from '../../assets/images/about-us/academy.jpg';
import Pagnition from '~/components/Layouts/components/Pagnition';
const cx = classNames.bind(styles);
const logos = [
    diageo,
    fasgreat,
    generali,
    honda,
    hyundai_tc_motor,
    isuzu,
    kao,
    keep_working_club,
    schneider,
    suzuki,
    timebeat,
    timebit,
    timebit_otc,
    toyota,
    unilever,
];
const services = [
    {
        name: 'Branding Strategy & Creative',
        coverUrl: academy,
        childs: [
            'Brand strategy',
            'Communication strategy',
            'Creative strategy & concepts development',
            'Insight development and trend mapping',
            'Brand keys and message houses',
        ],
    },
    {
        name: 'Integrated Digital Marketing',
        coverUrl: academy,
        childs: ['Strategy & campaigns', 'Concept development', 'Social Media', 'Content Creative & Development'],
    },
    {
        name: 'PR',
        coverUrl: academy,
        childs: ['Strategic media relations', 'Communications Strategy', 'Community Management', 'Product Launching '],
    },
    {
        name: 'Strategic advisory',
        coverUrl: academy,
        childs: ['Stakeholder engagement and insight generation', 'Competitor landscape analysis'],
    },
    {
        name: 'Data-driven Marketing',
        coverUrl: academy,
        childs: ['SEO', 'Web/App Content', 'Online Ads', 'Dat management & automation'],
    },
    {
        name: 'Influencer Marketing',
        coverUrl: academy,
        childs: ['Influencer/KOLs managerment', 'KOLs booking'],
    },

    {
        name: 'Digital/Media',
        coverUrl: academy,
        childs: ['Media Planning', 'Media Buying'],
    },
    {
        name: 'Event Management',
        coverUrl: academy,
        childs: ['PR launching event'],
    },
    {
        name: 'Advertising',
        coverUrl: academy,
        childs: ['Videos', 'TVCs', 'Viral Clip', 'Campaign'],
    },
    {
        name: 'UX/UI Design',
        coverUrl: academy,
        childs: ['Website and E-commerce', 'Platform', 'App', 'CRM'],
    },
    {
        name: 'Digital Content Studio',
        coverUrl: academy,
        childs: [
            'Digital and content strategy',
            'Influencer strategy, engagement and content',
            'Social media content',
            'Website layouts, e-newsletters, content calendars and playbooks',
        ],
    },
    {
        name: 'Event Management',
        coverUrl: academy,
        childs: ['PR launching event'],
    },
];

function Service() {
    return (
        <>
            <div className={cx('hero')}>
                <span className={cx('hero', 'heading--super')}>
                    OUR<br></br>SERVICES
                </span>
            </div>
            <div className={cx('content-container')}>
                <section className={cx('services')}>
                    {services.map((service, i) => (
                        <ServiceCard
                            className={cx('services__item')}
                            name={service.name}
                            childs={service.childs}
                            coverUrl={service.coverUrl}
                            key={i}
                        >
                            {service.name}
                        </ServiceCard>
                    ))}
                </section>
                <Pagnition total={12} amount={6} active={1}></Pagnition>
            </div>
        </>
    );
}

export default Service;
