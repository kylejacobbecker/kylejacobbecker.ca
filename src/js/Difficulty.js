'use strict';

export class Difficulty {
  constructor(colour, moveHelper) {
    this._colour = colour;
    this._moveHelper = moveHelper;
  }

  findPieces(board) {
    let pieces = [];


    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (board[i][j].substr(0, 1) === this._colour) {
          pieces.push([i, j]);
        }
      }
    }

    return pieces;
  }

  makeMove(board) {
    throw new Error('makeMove needs to be implemented');
  }
};