'use strict';

import { colours, coloursText, letters, pieces, piecesText } from './constants';

export class MoveTexter {
  convertCoordinatesToText(moveCoordinates) {
    const row = moveCoordinates[0] + 1;
    const col = moveCoordinates[1];
    let output = '';

    if (col === 0) {
      output += letters.c0;
    } else if (col === 1) {
      output += letters.c1;
    } else if (col === 2) {
      output += letters.c2;
    } else if (col === 3) {
      output += letters.c3;
    } else if (col === 4) {
      output += letters.c4;
    } else if (col === 5) {
      output += letters.c5;
    } else if (col === 6) {
      output += letters.c6;
    } else if (col === 7) {
      output += letters.c7;
    }

    output += row;

    return output;
  }

  convertPieceToText(movePiece) {
    const colour = movePiece.substr(0, 1);
    const piece = movePiece.substr(1, 1);
    let output = '';

    if (colour === colours.black) {
      output += coloursText.black;
    } else if (colour === colours.white) {
      output += coloursText.white;
    }

    output += ' ';

    if (piece === pieces.pawn) {
      output += piecesText.pawn;
    } else if (piece === pieces.rook) {
      output += piecesText.rook;
    } else if (piece === pieces.knight) {
      output += piecesText.knight;
    } else if (piece === pieces.bishop) {
      output += piecesText.bishop;
    } else if (piece === pieces.queen) {
      output += piecesText.queen;
    } else if (piece === pieces.king) {
      output += piecesText.king;
    }

    return output;
  }

  convertMoveToText(move) {
    let output = move[0] + ' moved ';
    output += this.convertPieceToText(move[3]);
    output += ' from ';
    output += this.convertCoordinatesToText(move[1]);
    output += ' to ';
    output += this.convertCoordinatesToText(move[2]);

    if (move[4] !== pieces.none) {
      output += ' taking ';
      output += this.convertPieceToText(move[4]);
    }

    output += '.';

    return output;
  }
};