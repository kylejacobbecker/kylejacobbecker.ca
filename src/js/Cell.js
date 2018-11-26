'use strict';

import React from 'react';
import { classes, statuses } from './constants';

export class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    let nameClass;

    if (this.props.status === statuses.current) {
      nameClass = classes.cellCurrent;
    } else if (this.props.status === statuses.valid) {
      nameClass = classes.cellValid;
    } else if (((this.props.row + this.props.col) % 2) == 0) {
      nameClass = classes.cellDark;
    } else {
      nameClass = classes.cellLight;
    }

    return(
      <td className={nameClass} onClick={this.handleClick}>
        {this.props.piece}
      </td>
    );
  }

  handleClick(e) {
    this.props.onClick(this.props.row, this.props.col);
  }
};