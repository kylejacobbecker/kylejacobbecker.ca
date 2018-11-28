'use strict';

import { Difficulty } from './Difficulty';

export class Difficulty0 extends Difficulty {
  constructor(colour, moveHelper) {
    super(colour, moveHelper);
  }

  makeMove(board) {
    let foundMove = false;
    let pieces = this.findPieces(board);
    let moves;
    let indexP;
    let indexM;

    while (!foundMove) {
      indexP = Math.floor(Math.random() * pieces.length);
      moves = this._moveHelper.findMoves(board, pieces[indexP][0], pieces[indexP][1]);
      indexM = Math.floor(Math.random() * moves.length);

      if (moves.length === 0) {
        pieces.splice(indexP, 1);
      } else {
        foundMove = true;
      }
    }

    return [pieces[indexP], moves[indexM]];
  }
};