import React from 'react';
import classNames from 'classnames/bind';
import styles from './ProjectCard.module.scss';
const cx = classNames.bind(styles);
function ProjectCard(props) {
    return (
        <div className={cx('card')} data-aos="fade-up">
            <img src={props.cover} alt={props.name} className={cx('card__cover')} />
            <div className={cx('card__info')}>
                <span className={cx('card__info__client')}>{props.client}</span>
                <span className={cx('card__info__name')}>{props.name}</span>
                <span className={cx('card__info__role')}>{props.role}</span>
            </div>
        </div>
    );
}
export default ProjectCard;
