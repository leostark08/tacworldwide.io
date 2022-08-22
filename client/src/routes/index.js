import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile, layout: null },
];

//require login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
