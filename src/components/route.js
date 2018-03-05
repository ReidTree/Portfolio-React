// returns fold component
import Fold from './fold';

// returns object of HomePage components
import HomeAbout from './home-sections/about';
import HomeDesign from './home-sections/design';
import HomeSites from './home-sections/sites';
import HomeContact from './home-sections/contact';
import HomeLayout from './home-sections/section-layout';


import Circle from './reusable-comps/circle';
import StarBar from './reusable-comps/starbar';


import Res from './responsive';
import Layout from './aEvt';

import webImages from './images';


const Rt = {
  Fold: Fold,
  HomeAbout: HomeAbout,
  HomeDesign: HomeDesign,
  HomeSites: HomeSites,
  HomeContact: HomeContact,
  HomeLayout: HomeLayout,
  Circle: Circle,
  StarBar: StarBar,
  Res: Res,
  Layout: Layout,
  webImages: webImages,
}

export default Rt;
