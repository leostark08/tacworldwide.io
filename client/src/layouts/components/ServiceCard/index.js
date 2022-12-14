import React from 'react';
import classNames from 'classnames/bind';
import styles from './ServiceCard.module.scss';

const cx = classNames.bind(styles);

function ServiceCard(props) {
    return (
        <div className={cx('card', props.className)} data-aos="fade-up">
            <div className={cx('card__cover')}>
                <img src={props.coverUrl} alt={props.name} />
            </div>
            <div className={cx('card__info')}>
                <div className={cx('card__info__name')}>{props.name}</div>
                <div className={cx('card__info__child')}>
                    {props.childs.map((child, j) => (
                        <span key={j}>{child}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;
