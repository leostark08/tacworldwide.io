import Home from '~/pages/Home';
import Service from '~/pages/Service';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/service', component: Service },
    // { path: '/profile', component: Profile, layout: null },
];

//require login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
