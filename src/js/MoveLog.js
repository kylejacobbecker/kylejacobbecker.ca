'use strict';

import React from 'react';
import { classes, pieces, players } from './constants';
import { MoveTexter } from './MoveTexter';

export class MoveLog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moveTexter: new MoveTexter()
    };
  }

  render() {
    return(
      <div className={classes.moveLog}>
        {this.props.moves.map((move) => {
          const text = this.state.moveTexter.convertMoveToText(move);
          let output;

          if ((move[0] === players.opponent) && (move[4] !== pieces.none)) {
            output = <div className={classes.moveOpponent}>{text}</div>;
          } else if (move[0] === players.opponent) {
            output = <div className={classes.moveOpponent}>{text}</div>;
          } else if ((move[0] === players.player) && (move[4] !== pieces.none)) {
            output = <div className={classes.movePlayer}>{text}</div>;
          } else if (move[0] === players.player) {
            output = <div className={classes.movePlayer}>{text}</div>;
          }

          return output;
        })}
      </div>
    );
  }
};