import React, { useState } from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('hero')}>
            <span className={cx('hero__vision')}>
                TAC provides communications consultancy, strategic development, creative development to deliver winning
                solutions for clients and brands.
            </span>
        </div>
    );
}

export default Home;
