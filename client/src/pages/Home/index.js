import React, { useState, useEffect } from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation, EffectCards, Virtual } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import AOS from 'aos';
import 'aos/dist/aos.css';

import diageo from '../../assets/images/logo/diageo.png';
import fasgreat from '../../assets/images/logo/fasgreat.png';
import generali from '../../assets/images/logo/generali.png';
import honda from '../../assets/images/logo/honda.png';
import hyundai_tc_motor from '../../assets/images/logo/hyundai-tc-motor.png';
import isuzu from '../../assets/images/logo/isuzu.png';
import kao from '../../assets/images/logo/kao.png';
import keep_working_club from '../../assets/images/logo/keep-working-club.png';
import laurier from '../../assets/images/logo/laurier.png';
import schneider from '../../assets/images/logo/schneider.png';
import suzuki from '../../assets/images/logo/suzuki.png';
import timebeat from '../../assets/images/logo/timebeat.png';
import timebit from '../../assets/images/logo/timebit.png';
import timebit_otc from '../../assets/images/logo/timebit-otc.png';
import toyota from '../../assets/images/logo/toyota.png';
import unilever_studio from '../../assets/images/logo/unilever-studio.png';
import unilever from '../../assets/images/logo/unilever.png';
import academy from '../../assets/images/about-us/academy.jpg';
import marketing from '../../assets/images/about-us/marketing.jpeg';
import strategy from '../../assets/images/about-us/strategy.jpg';
const cx = classNames.bind(styles);
const NUMBER_OF_LOGO = 6;
SwiperCore.use([Virtual, Navigation, Pagination]);
const logos = [
    diageo,
    fasgreat,
    generali,
    honda,
    hyundai_tc_motor,
    isuzu,
    kao,
    keep_working_club,
    laurier,
    schneider,
    suzuki,
    timebeat,
    timebit,
    timebit_otc,
    toyota,
    unilever_studio,
    unilever,
];

const aboutImgs = [academy, marketing, strategy];

const services = [
    {
        name: 'Digital/Media',
        coverUrl: academy,
        childs: ['Media Planning', 'Media Buying'],
    },
    {
        name: 'Digital/Media',
        coverUrl: academy,
        childs: ['Media Planning', 'Media Buying'],
    },
    {
        name: 'Digital/Media',
        coverUrl: academy,
        childs: ['Media Planning', 'Media Buying'],
    },
    {
        name: 'Digital/Media',
        coverUrl: academy,
        childs: ['Media Planning', 'Media Buying'],
    },
    {
        name: 'Digital/Media',
        coverUrl: academy,
        childs: ['Media Planning', 'Media Buying'],
    },
    {
        name: 'Digital/Media',
        coverUrl: academy,
        childs: ['Media Planning', 'Media Buying'],
    },
    {
        name: 'Digital/Media',
        coverUrl: academy,
        childs: ['Media Planning', 'Media Buying'],
    },
    {
        name: 'Digital/Media',
        coverUrl: academy,
        childs: ['Media Planning', 'Media Buying'],
    },
    {
        name: 'Digital/Media',
        coverUrl: academy,
        childs: ['Media Planning', 'Media Buying'],
    },
    {
        name: 'Digital/Media',
        coverUrl: academy,
        childs: ['Media Planning', 'Media Buying'],
    },
    {
        name: 'Digital/Media',
        coverUrl: academy,
        childs: ['Media Planning', 'Media Buying'],
    },
    {
        name: 'Digital/Media',
        coverUrl: academy,
        childs: ['Media Planning', 'Media Buying'],
    },
];

const AOS_DURATION = 2000;
const logo2gr = new Array(Math.ceil(logos.length / NUMBER_OF_LOGO)).fill().map((_) => logos.splice(0, NUMBER_OF_LOGO));
function Home() {
    useEffect(() => {
        AOS.init({
            duration: AOS_DURATION,
            once: false,
        });
        AOS.refresh();
    }, []);
    return (
        <>
            <section id={cx('about-us')} className={cx('about-us', 'section')}>
                <div className={cx('about-us__core-value')}>
                    <span data-aos="zoom-in">Inspire - Creative - Energy - Unique</span>
                </div>
                <p className={cx('about-us__vision')} data-aos="fade-up">
                    Everyday epic provides <br></br> communications consultancy, strategic development, creative
                    development
                    <br></br> to deliver winning solutions for clients and brands.
                </p>
            </section>
            <section id={cx('partner')} className={cx('partner', 'section')}>
                <span className={cx('partner__heading', 'heading--2')}>OUR CLIENTS</span>
                <span className={cx('partner__describe', 'describe')}>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                    dignissim elementum.
                </span>
                <div className={cx('partner__logos')}>
                    {logo2gr.map((group, index) => (
                        <Swiper
                            key={index}
                            className={cx('swiper partner-swiper', 'partner__logos__swiper')}
                            spaceBetween={150}
                            slidesPerView={5}
                            loop={true}
                            simulateTouch={false}
                            autoplay={{
                                delay: 4000 + index * 100,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            data-aos="zoom-in"
                        >
                            {group.map((logo, i) => (
                                <SwiperSlide key={i}>
                                    {<img className={cx('partner__logos__img')} src={logo} alt="Partner Logo" />}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ))}
                </div>
            </section>
            <section id={cx('about')} className={cx('about', 'section')}>
                <span className={cx('about__heading', 'heading--1')} data-aos="zoom-in-up">
                    WHAT WE ARE?
                </span>
                <div className={cx('about__content')}>
                    <div className={cx('about__content__describe')} data-aos="fade-right">
                        <p className={cx('describe')}>
                            We believe that that there is a DOER in all of us who always have a indomitable spirit to do
                            what can’t be done.
                        </p>
                        <p className={cx('describe')}>
                            We are a creatively driven integrated marketing communications, fostering collaboration
                            throughout the group with a strong innovation in technology-based.
                        </p>
                    </div>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={{ EffectCards }}
                        className={cx('about__content__swiper', 'swiper')}
                        data-aos="fade-left"
                    >
                        {aboutImgs.map((img, i) => (
                            <SwiperSlide>
                                <img src={img} alt="about-us" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
            <section id={cx('service')} className={cx('service', 'section')}>
                {services.map((service, i) => (
                    <div className={cx('service__item')}>
                        <div className={cx('service__item__info')}>
                            <div className={cx('service__item__info__name')}>{service.name}</div>
                            {service.childs.map((child, j) => (
                                <div className={cx('service__item__info__child')}>{child}</div>
                            ))}
                        </div>
                        <div className={cx('service__item__cover')}>
                            <img src={service.coverUrl} alt={service.name} />
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}

export default Home;
