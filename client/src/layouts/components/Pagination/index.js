import React from 'react';
import styles from './Pagination.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Pagination(props) {
    let size = Math.ceil(props.total / props.amount);

    var elms = [];
    for (let i = 0; i < size; i++) {
        elms.push(
            <li key={i} className={cx('pagnition__item', props.active === i + 1 ? 'pagnition__item--active' : '')}>
                <span>{i + 1}</span>
            </li>,
        );
    }

    return <ul className={cx('pagnition')}>{elms}</ul>;
}

export default Pagination;
