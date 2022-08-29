import Header from '~/components/Layouts/components/Header';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div>
            <Header></Header>
            <div className={cx('container')}>
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
