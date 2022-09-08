import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Contact.module.scss';
import Header from '~/layouts/components/Header';
import { FaFacebook, FaYoutube, FaTelegram, FaTwitter } from 'react-icons/fa';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <>
            <Header disableContact={true} />
            <section className={cx('contact')}>
                <div className={cx('contact__card')}>
                    <form className={cx('contact__card__form')}>
                        <div className={cx('row')}>
                            <div className={cx('input-group', 'row__input-group')}>
                                <input className={cx('input-group__input')} required />
                                <label className={cx('input-group__label')}>Your name</label>
                            </div>
                            <div className={cx('input-group', 'row__input-group')}>
                                <input className={cx('input-group__input')} required />
                                <label className={cx('input-group__label')}>Email</label>
                            </div>
                        </div>
                        <div className={cx('row')}>
                            <div className={cx('input-group', 'row__input-group')}>
                                <input className={cx('input-group__input')} required />
                                <label className={cx('input-group__label')}>Company</label>
                            </div>
                            <div className={cx('input-group', 'row__input-group')}>
                                <input className={cx('input-group__input')} required />
                                <label className={cx('input-group__label')}>Website</label>
                            </div>
                        </div>
                        <div className={cx('input-group')}>
                            <input className={cx('input-group__input')} required />
                            <label className={cx('input-group__label')}>Message</label>
                        </div>
                        <button className={cx('button--primary', 'contact__card__form__submit')}>Send message</button>
                    </form>

                    <div className={cx('contact__connect')}>
                        <div className={cx('contact__connect__office')}>
                            <Link to="#" className={cx('contact__connect__office__link')}>
                                <p>info@everydayepic.com</p>
                            </Link>
                            <Link to="#" className={cx('contact__connect__office__link')}>
                                <p>+84 123 456 789</p>
                            </Link>
                        </div>

                        <div className={cx('contact__connect__social')}>
                            <Link className={cx('contact__connect__social__link')} to="#">
                                <FaFacebook />
                            </Link>
                            <Link className={cx('contact__connect__social__link')} to="#">
                                <FaYoutube />
                            </Link>
                            <Link className={cx('contact__connect__social__link')} to="#">
                                <FaTelegram />
                            </Link>
                            <Link className={cx('contact__connect__social__link')} to="#">
                                <FaTwitter />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Contact;
