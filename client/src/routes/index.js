import Home from '~/pages/Home';
import Project from '~/pages/Project';
import ProjectDetail from '~/pages/ProjectDetail';
import Service from '~/pages/Service';
import Contact from '~/pages/Contact';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/service', component: Service },
    { path: '/project', component: Project },
    { path: '/project/:alias', component: ProjectDetail },
    { path: '/contact', component: Contact, layout: null },
    // { path: '/profile', component: Profile, layout: null },
];

//require login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
