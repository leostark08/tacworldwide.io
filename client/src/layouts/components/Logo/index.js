import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Logo(props) {
    return (
        <Link to="/" className={cx('logo', props.className)}>
            <span>Everyday epic!</span>
        </Link>
    );
}

export default Logo;
