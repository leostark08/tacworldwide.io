import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import ScrollToTop from '../components/ScrollToTop';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            <Header></Header>
            <div className={cx('container')}>
                <div className="content">{children}</div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default DefaultLayout;
