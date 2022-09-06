// import React, { useState, useEffect } from 'react';
import styles from './Service.module.scss';
import ServiceCard from '~/layouts/components/ServiceCard';
import classNames from 'classnames/bind';
import academy from '../../assets/images/about-us/academy.jpg';

// service covers
import service1 from '../../assets/images/services/service1.jpg';
import service2 from '../../assets/images/services/service2.jpg';
import service3 from '../../assets/images/services/service3.jpg';
import service4 from '../../assets/images/services/service4.jpg';
import service5 from '../../assets/images/services/service5.jpg';
import service6 from '../../assets/images/services/service6.jpg';
import service7 from '../../assets/images/services/service7.jpg';
import service8 from '../../assets/images/services/service8.jpg';
import service9 from '../../assets/images/services/service9.jpg';
import service10 from '../../assets/images/services/service10.jpg';
import service11 from '../../assets/images/services/service11.jpg';
import service12 from '../../assets/images/services/service12.jpg';

import Pagination from '~/layouts/components/Pagination';
const cx = classNames.bind(styles);

const services = [
    {
        name: 'Branding Strategy & Creative',
        coverUrl: service1,
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
        coverUrl: service2,
        childs: ['Strategy & campaigns', 'Concept development', 'Social Media', 'Content Creative & Development'],
    },
    {
        name: 'PR',
        coverUrl: service3,
        childs: ['Strategic media relations', 'Communications Strategy', 'Community Management', 'Product Launching '],
    },
    {
        name: 'Strategic advisory',
        coverUrl: service4,
        childs: ['Stakeholder engagement and insight generation', 'Competitor landscape analysis'],
    },
    {
        name: 'Data-driven Marketing',
        coverUrl: service5,
        childs: ['SEO', 'Web/App Content', 'Online Ads', 'Dat management & automation'],
    },
    {
        name: 'Influencer Marketing',
        coverUrl: service6,
        childs: ['Influencer/KOLs managerment', 'KOLs booking'],
    },

    {
        name: 'Digital/Media',
        coverUrl: service7,
        childs: ['Media Planning', 'Media Buying'],
    },
    {
        name: 'Event Management',
        coverUrl: service8,
        childs: ['PR launching event'],
    },
    {
        name: 'Advertising',
        coverUrl: service9,
        childs: ['Videos', 'TVCs', 'Viral Clip', 'Campaign'],
    },
    {
        name: 'UX/UI Design',
        coverUrl: service10,
        childs: ['Website and E-commerce', 'Platform', 'App', 'CRM'],
    },
    {
        name: 'Digital Content Studio',
        coverUrl: service11,
        childs: [
            'Digital and content strategy',
            'Influencer strategy, engagement and content',
            'Social media content',
            'Website layouts, e-newsletters, content calendars and playbooks',
        ],
    },
    {
        name: 'Event Management',
        coverUrl: service12,
        childs: ['PR launching event'],
    },
];

function Service() {
    return (
        <>
            <div className={cx('hero', 'service-hero')}>
                <span className={cx('hero', 'heading--super')}>
                    OUR<br></br>SERVICES
                </span>
            </div>
            <div className={cx('content-container')}>
                <section className={cx('services')}>
                    {services.map((service, i) => (
                        <ServiceCard
                            key={i}
                            className={cx('services__item')}
                            name={service.name}
                            childs={service.childs}
                            coverUrl={service.coverUrl}
                        >
                            {service.name}
                        </ServiceCard>
                    ))}
                </section>
                {/* <Pagination total={12} amount={6} active={1}></Pagination> */}
            </div>
        </>
    );
}

export default Service;
