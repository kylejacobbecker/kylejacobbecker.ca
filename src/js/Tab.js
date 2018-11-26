'use strict';

import React from 'react';
import { classes } from './constants';

export class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    if (this.props.open) {
      return(
        <li>
          <span className={classes.tabInactive}>{this.props.name}</span>
        </li>
      );
    } else {
      return(
        <li>
          <span className={classes.tabActive} onClick={this.handleClick}>{this.props.name}</span>
        </li>
      );
    }
  }

  handleClick(e) {
    this.props.onClick(this.props.name);
  }
};