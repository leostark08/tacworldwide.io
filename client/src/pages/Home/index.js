import React, { useEffect } from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation, Virtual } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import AOS from 'aos';
import 'aos/dist/aos.css';

import diageo from '../../assets/images/logo/diageo.png';
import fasgreat from '../../assets/images/logo/fasgreat.png';
import samsung from '../../assets/images/logo/samsung.png';
import cmc from '../../assets/images/logo/cmc.png';
import mobifone from '../../assets/images/logo/mobifone.png';
import dienquang from '../../assets/images/logo/dien-quang.png';
import generali from '../../assets/images/logo/generali.png';
import honda from '../../assets/images/logo/honda.png';
import hyundai_tc_motor from '../../assets/images/logo/hyundai-tc-motor.png';
import isuzu from '../../assets/images/logo/isuzu.png';
import kao from '../../assets/images/logo/kao.png';
import keep_working_club from '../../assets/images/logo/keep-working-club.png';
import schneider from '../../assets/images/logo/schneider.png';
import suzuki from '../../assets/images/logo/suzuki.png';
import timebeat from '../../assets/images/logo/timebeat.png';
import timebit from '../../assets/images/logo/timebit.png';
import timebit_otc from '../../assets/images/logo/timebit-otc.png';
import toyota from '../../assets/images/logo/toyota.png';
import unilever from '../../assets/images/logo/unilever.png';
import academy from '../../assets/images/about-us/academy.jpg';
import marketing from '../../assets/images/about-us/marketing.jpeg';
import strategy from '../../assets/images/about-us/strategy.jpg';
// service covers
import service1 from '../../assets/images/services/service1.jpg';
import service2 from '../../assets/images/services/service2.jpg';
import service3 from '../../assets/images/services/service3.jpg';
import service4 from '../../assets/images/services/service4.jpg';
import service5 from '../../assets/images/services/service5.jpg';
import service6 from '../../assets/images/services/service6.jpg';
// project covers
import project1 from '../../assets/images/projects/project1.jpg';
import project2 from '../../assets/images/projects/project2.jpg';
import project3 from '../../assets/images/projects/project3.jpg';
import project4 from '../../assets/images/projects/project4.jpg';
import project5 from '../../assets/images/projects/project5.jpg';
import project6 from '../../assets/images/projects/project6.jpg';

// about
import inspire from '../../assets/images/about-us/inspire.jpg';
import creative from '../../assets/images/about-us/creative.jpg';
import unique from '../../assets/images/about-us/unique1.jpg';
import energy from '../../assets/images/about-us/energy.jpg';

import ServiceCard from '~/layouts/components/ServiceCard';
import ProjectCard from '~/layouts/components/ProjectCard';
const cx = classNames.bind(styles);
const NUMBER_OF_LOGO = 5;
SwiperCore.use([Virtual, Navigation, Pagination]);
const logos = [
    { src: suzuki },
    { src: toyota },
    { src: honda },
    { src: isuzu },
    { src: generali },
    { src: diageo },
    { src: samsung },
    { src: unilever },
    { src: cmc },
    { src: schneider },
    { src: kao },
    { src: fasgreat },
    { src: hyundai_tc_motor },
    // { src: timebit },
    { src: mobifone },
    { src: dienquang },
    // keep_working_club,
];

const aboutImgs = [inspire, creative, energy, unique];

const services = [
    {
        name: 'Branding Strategy & Creative',
        coverUrl: service1,
        childs: [
            'Brand strategy',
            'Communication strategy',
            'Creative strategy & concepts development',
            'Insight development and trend mapping',
            'Brand keys and message houses',
        ],
    },
    {
        name: 'Integrated Digital Marketing',
        coverUrl: service2,
        childs: ['Strategy & campaigns', 'Concept development', 'Social Media', 'Content Creative & Development'],
    },
    {
        name: 'PR',
        coverUrl: service3,
        childs: ['Strategic media relations', 'Communications Strategy', 'Community Management', 'Product Launching '],
    },
    {
        name: 'Strategic advisory',
        coverUrl: service4,
        childs: ['Stakeholder engagement and insight generation', 'Competitor landscape analysis'],
    },
    {
        name: 'Data-driven Marketing',
        coverUrl: service5,
        childs: ['SEO', 'Web/App Content', 'Online Ads', 'Dat management & automation'],
    },
    {
        name: 'Influencer Marketing',
        coverUrl: service6,
        childs: ['Influencer/KOLs managerment', 'KOLs booking'],
    },
];

const works = [
    {
        name: 'Honda PR',
        client: 'Honda',
        role: 'Influencer Marketing',
        cover: project1,
    },
    {
        name: 'Hyundai PR',
        client: 'Hyundai',
        role: 'Data-driven Marketing',
        cover: project2,
    },
    {
        name: 'Suzuki Event',
        client: 'Suzuki',
        role: 'Integrated Digital Marketing',
        cover: project3,
    },
    {
        name: 'Toyota Marketing',
        client: 'Toyota',
        role: 'Branding Strategy & Creative',
        cover: project4,
    },
    {
        name: 'Unilever PR',
        client: 'Unilever',
        role: 'Integrated Digital Marketing',
        cover: project5,
    },
    {
        name: 'Generali',
        client: 'Generali',
        role: 'Branding Strategy & Creative',
        cover: project6,
    },
];

const AOS_DURATION = 1000;
const logo2gr = new Array(Math.ceil(logos.length / NUMBER_OF_LOGO)).fill().map((_) => logos.splice(0, NUMBER_OF_LOGO));
function Home() {
    useEffect(() => {
        AOS.init({
            duration: AOS_DURATION,
        });
        AOS.refresh();
    }, []);
    return (
        <>
            <section id={cx('about-us')} className={cx('about-us')}>
                <div className={cx('about-us__core-value')}>
                    <span data-aos="zoom-in">Inspire - Creative - Energy - Unique</span>
                </div>
                <p className={cx('about-us__vision')} data-aos="fade-up">
                    Everyday epic provides <br></br> communications consultancy, strategic development, creative
                    development
                    <br></br> to deliver winning solutions for clients and brands.
                </p>
            </section>
            <div className={cx('content-container')}>
                <section id={cx('partner')} className={cx('partner', 'section')}>
                    <span className={cx('partner__heading', 'heading')}>Our Clients</span>
                    <span className={cx('partner__describe', 'describe')}>
                        Lorem ipsum odor amet, consectetuer adipiscing elit.<br></br>Ac purus in massa egestas mollis
                        varius; dignissim elementum.
                    </span>
                    <div className={cx('partner__logos')}>
                        {logo2gr.map((group, index) => (
                            <Swiper
                                key={index}
                                className={cx('swiper partner-swiper', 'partner__logos__swiper')}
                                slidesPerView={5}
                                loop={true}
                                simulateTouch={false}
                                breakpoints={{
                                    // when window width is >= 320px
                                    320: {
                                        spaceBetween: 20,
                                    },
                                    // when window width is >= 480px
                                    480: {
                                        spaceBetween: 30,
                                    },
                                    // when window width is >= 768px
                                    768: {
                                        spaceBetween: 50,
                                    },
                                    // when window width is >= 1024px
                                    1024: {
                                        spaceBetween: 100,
                                    },
                                    // when window width is >= 1440px
                                    1440: {
                                        spaceBetween: 150,
                                    },
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Autoplay, Pagination, Navigation]}
                                data-aos="zoom-in"
                            >
                                {group.map((logo, i) => (
                                    <SwiperSlide key={i} className={cx('partner__logos__swiper__slide')}>
                                        {
                                            <img
                                                className={cx('partner__logos__img')}
                                                src={logo.src}
                                                alt="Partner Logo"
                                            />
                                        }
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ))}
                    </div>
                </section>
                <section id={cx('about')} className={cx('about', 'section')}>
                    <div className={cx('about__content')}>
                        <div className={cx('about__content__describe')} data-aos="zoom-in">
                            <span className={cx('heading')}>Who we are?</span>
                            <p className={cx('describe')}>
                                We believe that that there is a DOER in all of us who always have a indomitable spirit
                                to do what can’t be done.
                                <br></br>
                                <br></br>
                                We are a creatively driven integrated marketing communications, fostering collaboration
                                throughout the group with a strong innovation in technology-based.
                            </p>
                            <Link to="#" className={cx('about__content__describe__more')}>
                                <span>Explore more!</span>
                            </Link>
                        </div>

                        <div className={cx('about__content__imgs')} data-aos="zoom-in">
                            {aboutImgs.map((img, i) => (
                                <img key={i} src={img} alt={img} />
                            ))}
                        </div>
                    </div>
                </section>
                <section id={cx('service')} className={cx('service', 'section')}>
                    <span className={cx('service__heading', 'heading')} data-aos="zoom-in">
                        Our Services
                    </span>
                    <div className={cx('service__list')}>
                        {services.map((service, i) => (
                            <ServiceCard
                                key={i}
                                className={cx('service__list__item')}
                                name={service.name}
                                childs={service.childs}
                                coverUrl={service.coverUrl}
                            >
                                {service.name}
                            </ServiceCard>
                        ))}
                    </div>
                    <div className={cx('service__more', 'more')}>
                        <Link to="/service" replace className={cx('button--primary')}>
                            View all services
                        </Link>
                    </div>
                </section>

                <section className={cx('works', 'section')}>
                    <span className={cx('works__heading', 'heading')} data-aos="zoom-in">
                        Our Projects
                    </span>
                    <div className={cx('works__list')}>
                        {works.map((work, i) => (
                            <ProjectCard
                                key={i}
                                cover={work.cover}
                                name={work.name}
                                client={work.client}
                                role={work.role}
                                className={cx('works__list__item')}
                            ></ProjectCard>
                        ))}
                    </div>
                    <div className={cx('works__more', 'more')}>
                        <Link to="/project" replace className={cx('button--primary')}>
                            View all projects
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Home;
