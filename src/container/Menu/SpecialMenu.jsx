import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
          <SubHeading title="Menu That Fits Your Palatte"  />
          <h1 className="headtext__cormorant"> Today's Special</h1>
      </div>

      <div className="app__specialMenu-menu">
          <div></div>
      </div>
  </div>
);

export default SpecialMenu;
