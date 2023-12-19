import { lazy } from 'react';

const Home = lazy(() => import('../pages/home'));
const About = lazy(() => import('../pages/about'));
const Faqs = lazy(() => import('../pages/faqs'));
const Contact = lazy(() => import('../pages/contact'));
const Appraisal = lazy(() => import('../pages/appraisal'));
const Services = lazy(() => import('../pages/services/services'));
const Nopage = lazy(() => import('../pages/nopage'));
const ColouredStone = lazy(() => import('../pages/services/ColouredStone'));
const DiamondGrading = lazy(() => import('../pages/services/diamondGrading'));
const EstateAppraisals = lazy(() => import('../pages/services/EstateAppraisals'));
const JewelryInsurance = lazy(() => import('../pages/services/JewelryInsurance'));
const JewelryPurchase = lazy(() => import('../pages/services/JewelryPurchase'));
const LitigationSupport = lazy(() => import('../pages/services/LitigationSupport'));
const MissingJewelry = lazy(() => import('../pages/services/MissingJewelry'));
const PrePurchase = lazy(() => import('../pages/services/PrePurchase'));
const ReportVerification = lazy(() => import('../pages/services/ReportVerification'));

const coreRoutes = [
  {
    path: '/',
    title: 'Home',
    component: Home,
  },
  {
    path: '/about',
    title: 'About',
    component: About,
  },
  {
    path: '/faq',
    title: 'Faqs',
    component: Faqs,
  },
  {
    path: '/contact',
    title: 'Contact',
    component: Contact,
  },
  {
    path: '/services',
    title: 'Services',
    component: Services,
  },
  {
    path: '/appraisal',
    title: 'Appraisal',
    component: Appraisal,
  },
  {
    path: '*',
    title: '404 Not Found',
    component: Nopage,
  },
  {
    path: '/services/coloured-stone',
    title: 'ColouredStone',
    component: ColouredStone,
  },
  {
    path: '/services/diamond-grading',
    title: 'DiamondGrading',
    component: DiamondGrading,
  },
  {
    path: '/services/estate-appraisals',
    title: 'EstateAppraisals',
    component: EstateAppraisals,
  },
  {
    path: '/services/jewelry-insurance',
    title: 'JewelryInsurance',
    component: JewelryInsurance,
  },
  {
    path: '/services/jewelry-purchase',
    title: 'JewelryPurchase',
    component: JewelryPurchase,
  },
  {
    path: '/services/litigation-support',
    title: 'LitigationSupport',
    component: LitigationSupport,
  },
  {
    path: '/services/missing-jewelry',
    title: 'MissingJewelry',
    component: MissingJewelry,
  },
  {
    path: '/services/pre-purchase',
    title: 'PrePurchase',
    component: PrePurchase,
  },
  {
    path: '/services/report-verification',
    title: 'ReportVerification',
    component: ReportVerification,
  },

];

const routes = [...coreRoutes];
export default routes;
