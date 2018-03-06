// returns fold component
import Fold from './fold';

// returns object of HomePage components
import Home from './home';
import HomeAbout from './home-sections/about';
import HomeDesign from './home-sections/design';
import HomeSites from './home-sections/sites';
import HomeContact from './home-sections/contact';
import HomeLayout from './home-sections/section-layout';

import AboutPage from './pages/about-page';
import SiteExamples from './pages/site-examples';
import DesignExamples from './pages/design-examples';

import Circle from './reusable-comps/circle';
import StarBar from './reusable-comps/starbar';


import Res from './responsive';
import Layout from './aEvt';

import webImages from './images';

import gists from './gists';
import FindPage from './findPage';

const Rt = {
  Fold: Fold,
  Home: Home,
  HomeAbout: HomeAbout,
  HomeDesign: HomeDesign,
  HomeSites: HomeSites,
  HomeContact: HomeContact,
  HomeLayout: HomeLayout,
  AboutPage: AboutPage,
  SiteExamples: SiteExamples,
  DesignExamples: DesignExamples,
  Circle: Circle,
  StarBar: StarBar,
  Res: Res,
  Layout: Layout,
  webImages: webImages,
  gists: gists,
  FindPage: FindPage,
}

export default Rt;
