import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <div>
            <Header defaultToggle={false}></Header>
            <div className={cx('container')}>
                <div className="content">{children}</div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default DefaultLayout;
