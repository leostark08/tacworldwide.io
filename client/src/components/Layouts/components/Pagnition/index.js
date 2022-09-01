import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Pagnition.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Pagnition(props) {
    let size = Math.ceil(props.total / props.amount);

    var elms = [];
    for (let i = 0; i < size; i++) {
        elms.push(
            <li className={cx('pagnition__item', props.active === i + 1 ? 'pagnition__item--active' : '')}>
                <span>{i + 1}</span>
            </li>,
        );
    }

    return <ul className={cx('pagnition')}>{elms}</ul>;
}

export default Pagnition;
