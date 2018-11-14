'use strict';

import React from 'react';
import { classes } from './classes';

export class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.open[0]) {
      return(
        <div className={classes.sidebarProfile}>
          <h3>Contact</h3>
          <ul>
            <li>
              <i className="material-icons">email</i>
              <a className="contact" href="mailto: kylejacobbecker+career@gmail.com">
                kylejacobbecker+career@gmail.com</a>
            </li>
            <li>
              <i className="material-icons">phone</i>
              <span className="contact">+1 (519) 496-8675</span>
            </li>
          </ul>

          <h3>Links</h3>
          <ul>
            <li>
              <i className="fa fa-github-square"></i>
              <a className="link" href="https://github.com/kylejacobbecker"
              target="_blank">kylejacobbecker</a>
            </li>
            <li>
              <i className="fa fa-linkedin-square"></i>
              <a className="link" href="https://www.linkedin.com/in/kylejacobbecker"
              target="_blank">kylejacobbecker</a>
            </li>
          </ul>
        </div>
      );
    } else {
      return(
        <div className={classes.sidebar}>
           <span>This is chess sidebar.</span>
        </div>
      );
    }
  }
};