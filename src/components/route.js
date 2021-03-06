// returns fold component
import Fold from './fold';

// returns object of HomePage components
import Home from './home';
import HomeAbout from './home-sections/home-about';
import HomeDesign from './home-sections/design';
import HomeSites from './home-sections/sites';
import HomeContact from './home-sections/contact';
import HomeLayout from './home-sections/home-layout';
import MoreButton from './home-sections/more-buttons';

import AboutPage from './pages/about-page';
import SiteExamples from './pages/site-examples';
import DesignExamples from './pages/design-examples';
import Demos from './pages/demos-factory';

import Circle from './reusable-comps/circle';
import StarBar from './reusable-comps/starbar';

// import MadLib from './demos/madlib/build';

import Res from './responsive';

import webImages from './images';

import gists from './gists';

const Rt = {
  Fold: Fold,
  Home: Home,
  HomeAbout: HomeAbout,
  HomeDesign: HomeDesign,
  HomeSites: HomeSites,
  HomeContact: HomeContact,
  HomeLayout: HomeLayout,
  MoreButton: MoreButton,
  AboutPage: AboutPage,
  SiteExamples: SiteExamples,
  DesignExamples: DesignExamples,
  Demos: Demos,
  Circle: Circle,
  StarBar: StarBar,
  Res: Res,
  webImages: webImages,
  gists: gists,
  // demos: {
  //   MadLib: MadLib
  // },
}

export default Rt;
