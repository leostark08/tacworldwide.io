import React from 'react';
import classNames from 'classnames/bind';
import styles from './Contact.module.scss';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <section className={cx('contact')}>
            <span className={cx('contact__heading')}>
                Let's work<br></br>together
            </span>

            <form className={cx('contact__form')}>
                <div className={cx('input-group')}>
                    <input className={cx('input-group__input')} required />
                    <label className={cx('input-group__label')}>Your name</label>
                </div>
                <div className={cx('input-group')}>
                    <input className={cx('input-group__input')} required />
                    <label className={cx('input-group__label')}>Email</label>
                </div>
            </form>
        </section>
    );
}
export default Contact;
