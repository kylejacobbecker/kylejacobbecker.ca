'use strict';

import React from 'react';
import { Board } from './Board';
import { classes, colours, difficulties } from './constants';

export class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colour:     colours.white,
      opponent:   colours.black,
      difficulty: difficulties.d0
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
          <Board colour={this.state.colour} opponent={this.state.opponent} difficulty={this.state.difficulty} />
        </div>
      );
    }
  }
};