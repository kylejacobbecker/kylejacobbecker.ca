'use strict';

import React from 'react';
import { Cell } from './Cell';
import { classes, colours, pieces, statuses } from './constants';
import { MoveHelper } from './MoveHelper';

export class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [['WR','WN','WB','WQ','WK','WB','WN','WR'],
              ['WP','WP','WP','WP','WP','WP','WP','WP'],
              ['','','','','','','',''],
              ['','','','','','','',''],
              ['','','','','','','',''],
              ['','','','','','','',''],
              ['BP','BP','BP','BP','BP','BP','BP','BP'],
              ['BR','BN','BB','BQ','BK','BB','BN','BR']],
      status: [['','','','','','','',''],
               ['','','','','','','',''],
               ['','','','','','','',''],
               ['','','','','','','',''],
               ['','','','','','','',''],
               ['','','','','','','',''],
               ['','','','','','','',''],
               ['','','','','','','','']],
      moveHelper: new MoveHelper()
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    if (this.props.colour === colours.white) {
      return(
        <table className={classes.board}>
          <tr>
            <td className={classes.coordinateY}>8</td>
            <Cell row={7} col={0} piece={this.state.board[7][0]} status={this.state.status[7][0]} onClick={this.handleClick} />
            <Cell row={7} col={1} piece={this.state.board[7][1]} status={this.state.status[7][1]} onClick={this.handleClick} />
            <Cell row={7} col={2} piece={this.state.board[7][2]} status={this.state.status[7][2]} onClick={this.handleClick} />
            <Cell row={7} col={3} piece={this.state.board[7][3]} status={this.state.status[7][3]} onClick={this.handleClick} />
            <Cell row={7} col={4} piece={this.state.board[7][4]} status={this.state.status[7][4]} onClick={this.handleClick} />
            <Cell row={7} col={5} piece={this.state.board[7][5]} status={this.state.status[7][5]} onClick={this.handleClick} />
            <Cell row={7} col={6} piece={this.state.board[7][6]} status={this.state.status[7][6]} onClick={this.handleClick} />
            <Cell row={7} col={7} piece={this.state.board[7][7]} status={this.state.status[7][7]} onClick={this.handleClick} />
          </tr>
          <tr>
            <td className={classes.coordinateY}>7</td>
            <Cell row={6} col={0} piece={this.state.board[6][0]} status={this.state.status[6][0]} onClick={this.handleClick} />
            <Cell row={6} col={1} piece={this.state.board[6][1]} status={this.state.status[6][1]} onClick={this.handleClick} />
            <Cell row={6} col={2} piece={this.state.board[6][2]} status={this.state.status[6][2]} onClick={this.handleClick} />
            <Cell row={6} col={3} piece={this.state.board[6][3]} status={this.state.status[6][3]} onClick={this.handleClick} />
            <Cell row={6} col={4} piece={this.state.board[6][4]} status={this.state.status[6][4]} onClick={this.handleClick} />
            <Cell row={6} col={5} piece={this.state.board[6][5]} status={this.state.status[6][5]} onClick={this.handleClick} />
            <Cell row={6} col={6} piece={this.state.board[6][6]} status={this.state.status[6][6]} onClick={this.handleClick} />
            <Cell row={6} col={7} piece={this.state.board[6][7]} status={this.state.status[6][7]} onClick={this.handleClick} />
          </tr>
          <tr>
            <td className={classes.coordinateY}>6</td>
            <Cell row={5} col={0} piece={this.state.board[5][0]} status={this.state.status[5][0]} onClick={this.handleClick} />
            <Cell row={5} col={1} piece={this.state.board[5][1]} status={this.state.status[5][1]} onClick={this.handleClick} />
            <Cell row={5} col={2} piece={this.state.board[5][2]} status={this.state.status[5][2]} onClick={this.handleClick} />
            <Cell row={5} col={3} piece={this.state.board[5][3]} status={this.state.status[5][3]} onClick={this.handleClick} />
            <Cell row={5} col={4} piece={this.state.board[5][4]} status={this.state.status[5][4]} onClick={this.handleClick} />
            <Cell row={5} col={5} piece={this.state.board[5][5]} status={this.state.status[5][5]} onClick={this.handleClick} />
            <Cell row={5} col={6} piece={this.state.board[5][6]} status={this.state.status[5][6]} onClick={this.handleClick} />
            <Cell row={5} col={7} piece={this.state.board[5][7]} status={this.state.status[5][7]} onClick={this.handleClick} />
          </tr>
          <tr>
            <td className={classes.coordinateY}>5</td>
            <Cell row={4} col={0} piece={this.state.board[4][0]} status={this.state.status[4][0]} onClick={this.handleClick} />
            <Cell row={4} col={1} piece={this.state.board[4][1]} status={this.state.status[4][1]} onClick={this.handleClick} />
            <Cell row={4} col={2} piece={this.state.board[4][2]} status={this.state.status[4][2]} onClick={this.handleClick} />
            <Cell row={4} col={3} piece={this.state.board[4][3]} status={this.state.status[4][3]} onClick={this.handleClick} />
            <Cell row={4} col={4} piece={this.state.board[4][4]} status={this.state.status[4][4]} onClick={this.handleClick} />
            <Cell row={4} col={5} piece={this.state.board[4][5]} status={this.state.status[4][5]} onClick={this.handleClick} />
            <Cell row={4} col={6} piece={this.state.board[4][6]} status={this.state.status[4][6]} onClick={this.handleClick} />
            <Cell row={4} col={7} piece={this.state.board[4][7]} status={this.state.status[4][7]} onClick={this.handleClick} />
          </tr>
          <tr>
            <td className={classes.coordinateY}>4</td>
            <Cell row={3} col={0} piece={this.state.board[3][0]} status={this.state.status[3][0]} onClick={this.handleClick} />
            <Cell row={3} col={1} piece={this.state.board[3][1]} status={this.state.status[3][1]} onClick={this.handleClick} />
            <Cell row={3} col={2} piece={this.state.board[3][2]} status={this.state.status[3][2]} onClick={this.handleClick} />
            <Cell row={3} col={3} piece={this.state.board[3][3]} status={this.state.status[3][3]} onClick={this.handleClick} />
            <Cell row={3} col={4} piece={this.state.board[3][4]} status={this.state.status[3][4]} onClick={this.handleClick} />
            <Cell row={3} col={5} piece={this.state.board[3][5]} status={this.state.status[3][5]} onClick={this.handleClick} />
            <Cell row={3} col={6} piece={this.state.board[3][6]} status={this.state.status[3][6]} onClick={this.handleClick} />
            <Cell row={3} col={7} piece={this.state.board[3][7]} status={this.state.status[3][7]} onClick={this.handleClick} />
          </tr>
          <tr>
            <td className={classes.coordinateY}>3</td>
            <Cell row={2} col={0} piece={this.state.board[2][0]} status={this.state.status[2][0]} onClick={this.handleClick} />
            <Cell row={2} col={1} piece={this.state.board[2][1]} status={this.state.status[2][1]} onClick={this.handleClick} />
            <Cell row={2} col={2} piece={this.state.board[2][2]} status={this.state.status[2][2]} onClick={this.handleClick} />
            <Cell row={2} col={3} piece={this.state.board[2][3]} status={this.state.status[2][3]} onClick={this.handleClick} />
            <Cell row={2} col={4} piece={this.state.board[2][4]} status={this.state.status[2][4]} onClick={this.handleClick} />
            <Cell row={2} col={5} piece={this.state.board[2][5]} status={this.state.status[2][5]} onClick={this.handleClick} />
            <Cell row={2} col={6} piece={this.state.board[2][6]} status={this.state.status[2][6]} onClick={this.handleClick} />
            <Cell row={2} col={7} piece={this.state.board[2][7]} status={this.state.status[2][7]} onClick={this.handleClick} />
          </tr>
          <tr>
            <td className={classes.coordinateY}>2</td>
            <Cell row={1} col={0} piece={this.state.board[1][0]} status={this.state.status[1][0]} onClick={this.handleClick} />
            <Cell row={1} col={1} piece={this.state.board[1][1]} status={this.state.status[1][1]} onClick={this.handleClick} />
            <Cell row={1} col={2} piece={this.state.board[1][2]} status={this.state.status[1][2]} onClick={this.handleClick} />
            <Cell row={1} col={3} piece={this.state.board[1][3]} status={this.state.status[1][3]} onClick={this.handleClick} />
            <Cell row={1} col={4} piece={this.state.board[1][4]} status={this.state.status[1][4]} onClick={this.handleClick} />
            <Cell row={1} col={5} piece={this.state.board[1][5]} status={this.state.status[1][5]} onClick={this.handleClick} />
            <Cell row={1} col={6} piece={this.state.board[1][6]} status={this.state.status[1][6]} onClick={this.handleClick} />
            <Cell row={1} col={7} piece={this.state.board[1][7]} status={this.state.status[1][7]} onClick={this.handleClick} />
          </tr>
          <tr>
            <td className={classes.coordinateY}>1</td>
            <Cell row={0} col={0} piece={this.state.board[0][0]} status={this.state.status[0][0]} onClick={this.handleClick} />
            <Cell row={0} col={1} piece={this.state.board[0][1]} status={this.state.status[0][1]} onClick={this.handleClick} />
            <Cell row={0} col={2} piece={this.state.board[0][2]} status={this.state.status[0][2]} onClick={this.handleClick} />
            <Cell row={0} col={3} piece={this.state.board[0][3]} status={this.state.status[0][3]} onClick={this.handleClick} />
            <Cell row={0} col={4} piece={this.state.board[0][4]} status={this.state.status[0][4]} onClick={this.handleClick} />
            <Cell row={0} col={5} piece={this.state.board[0][5]} status={this.state.status[0][5]} onClick={this.handleClick} />
            <Cell row={0} col={6} piece={this.state.board[0][6]} status={this.state.status[0][6]} onClick={this.handleClick} />
            <Cell row={0} col={7} piece={this.state.board[0][7]} status={this.state.status[0][7]} onClick={this.handleClick} />
          </tr>
          <tr className={classes.axis}>
            <td className={classes.coordinate}></td>
            <td className={classes.coordinateX}>A</td>
            <td className={classes.coordinateX}>B</td>
            <td className={classes.coordinateX}>C</td>
            <td className={classes.coordinateX}>D</td>
            <td className={classes.coordinateX}>E</td>
            <td className={classes.coordinateX}>F</td>
            <td className={classes.coordinateX}>G</td>
            <td className={classes.coordinateX}>H</td>
          </tr>
        </table>
      );
    }
  }

  handleClick(row, col) {
    if (this.state.board[row][col].substr(0, 1) === this.props.colour) {
      let newStatus = this.state.status;
      let moves = this.state.moveHelper.findMoves(this.state.board, row, col);

      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          if (newStatus[i][j] != statuses.none) {
            newStatus[i][j] = statuses.none;
          }
        }
      }

      newStatus[row][col] = statuses.current;

      for (let i = 0; i < moves.length; i++) {
        newStatus[moves[i][0]][moves[i][1]] = statuses.valid;
      }

      this.setState({
        board:      this.state.board,
        status:     newStatus,
        moveHelper: this.state.moveHelper
      });
    } else if (this.state.status[row][col] === statuses.valid) {
      let newBoard = this.state.board;
      let newStatus = this.state.status;
      let rowCurrent;
      let colCurrent;

      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          if (newStatus[i][j] === statuses.current) {
            rowCurrent = i;
            colCurrent = j;
          }
          newStatus[i][j] = statuses.none;
        }
      }

      newBoard[row][col] = newBoard[rowCurrent][colCurrent];
      newBoard[rowCurrent][colCurrent] = pieces.none;

      this.setState({
        board:      newBoard,
        status:     newStatus,
        moveHelper: this.state.moveHelper
      });
    }
  }
};