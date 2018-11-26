'use strict';

import React from 'react';
import { Board } from './Board';
import { classes, colours } from './constants';

export class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colour: colours.white
    };
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
          <Board colour={this.state.colour} />
        </div>
      );
    }
  }
};