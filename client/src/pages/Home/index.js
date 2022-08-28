import React, { useState } from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div>
            <section id={cx('about-us')} className={cx('about-us')}>
                <p className={cx('about-us__vision')}>
                    TAC provides communications consultancy,<br></br> strategic development,<br></br> creative
                    development to deliver winning solutions <br></br>for clients and brands.
                </p>
            </section>
            <section id={cx('partner')} className={cx('partner')}>
                <span className={cx('partner__title', 'title--secondary')}>OUR CLIENTS</span>
                <span className={cx('partner__sapo')}>text</span>
            </section>
        </div>
    );
}

export default Home;
