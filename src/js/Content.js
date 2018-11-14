'use strict';

import React from 'react';
import { classes } from './classes';

export class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.open[0]) {
      return(
        <div className={classes.contentIntro}>
          <span>This is home.</span>
        </div>
      );
    } else {
      return(
        <div className={classes.content}>
          <span>This is chess.</span>
        </div>
      );
    }
  }
};