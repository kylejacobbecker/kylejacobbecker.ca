'use strict';

import { colours, pieces } from './constants';

export class MoveHelper {
  findMoves(board, row, col) {
    const colour = board[row][col].substr(0, 1);
    const piece = board[row][col].substr(1, 1);

    // Moves will be an array of coordinates representing valid moves.
    let moves = [];
    let multiplier;
    let opponent;

    if (colour === colours.black) {
      multiplier = -1;
      opponent = colours.white;
    } else if (colour === colours.white) {
      multiplier = 1;
      opponent = colours.black;
    }

    if (piece === pieces.pawn) {
      if (((row + multiplier) > -1) && ((row + multiplier) < 8)) {
        // Forward one space.
        if (board[row + multiplier][col] === pieces.none) {
          moves.push([row + multiplier, col]);

          // Forward two spaces.
          if ((((row * multiplier) === 1) || ((row * multiplier) === -6)) &&
            (board[row + (2 * multiplier)][col] === pieces.none)) {
            moves.push([row + (2 * multiplier), col]);
          }
        }

        // Diagonal movement left.
        if (((col - 1) > -1) && (board[row + multiplier][col - 1].substr(0, 1) === opponent)) {
          moves.push([row + multiplier, col - 1]);
        }

        // Diagonal movement right.
        if (((col + 1) < 8) && (board[row + multiplier][col + 1].substr(0, 1) === opponent)) {
          moves.push([row + multiplier, col + 1]);
        }
      }
    } else if (piece === pieces.rook) {
      // Forward.
      for (let i = row + 1; i < 8; i++) {
        if (board[i][col].substr(0, 1) !== colour) {
          moves.push([i, col]);

          if (board[i][col].substr(0, 1) === opponent) {
            break;
          }
        } else {
          break;
        }
      }

      // Backward.
      for (let i = row - 1; i > -1; i--) {
        if (board[i][col].substr(0, 1) !== colour) {
          moves.push([i, col]);

          if (board[i][col].substr(0, 1) === opponent) {
            break;
          }
        } else {
          break;
        }
      }

      // Left.
      for (let j = col - 1; j > -1; j--) {
        if (board[row][j].substr(0, 1) !== colour) {
          moves.push([row, j]);

          if (board[row][j].substr(0, 1) === opponent) {
            break;
          }
        } else {
          break;
        }
      }

      // Right.
      for (let j = col + 1; j < 8; j++) {
        if (board[row][j].substr(0, 1) !== colour) {
          moves.push([row, j]);

          if (board[row][j].substr(0, 1) === opponent) {
            break;
          }
        } else {
          break;
        }
      }
    } else if (piece === pieces.knight) {
      // Forward.
      if ((row + 1) < 8) {
        // One space, left two spaces.
        if (((col - 2) > -1) && (board[row + 1][col - 2].substr(0, 1) !== colour)) {
          moves.push([row + 1, col - 2]);
        }

        // One space, right two spaces.
        if (((col + 2) < 8) && (board[row + 1][col + 2].substr(0, 1) !== colour)) {
          moves.push([row + 1, col + 2]);
        }

        if ((row + 2) < 8) {
          // Two spaces, left one space.
          if (((col - 1) > -1) && (board[row + 2][col - 1].substr(0, 1) !== colour)) {
            moves.push([row + 2, col - 1]);
          }

          // Two spaces, right one space.
          if (((col + 1) < 8) && (board[row + 2][col + 1].substr(0, 1) !== colour)) {
            moves.push([row + 2, col + 1]);
          }
        }
      }

      // Backward.
      if ((row - 1) > -1) {
        // One space, left two spaces.
        if (((col - 2) > -1) && (board[row - 1][col - 2].substr(0, 1) !== colour)) {
          moves.push([row - 1, col - 2]);
        }

        // One space, right two spaces.
        if (((col + 2) < 8) && (board[row - 1][col + 2].substr(0, 1) !== colour)) {
          moves.push([row - 1, col + 2]);
        }

        if ((row - 2) > -1) {
          // Two spaces, left one space.
          if (((col - 1) > -1) && (board[row - 2][col - 1].substr(0, 1) !== colour)) {
            moves.push([row - 2, col - 1]);
          }

          // Two spaces, right one space.
          if (((col + 1) < 8) && (board[row - 2][col + 1].substr(0, 1) !== colour)) {
            moves.push([row - 2, col + 1]);
          }
        }
      }
    } else if (piece === pieces.bishop) {
      // Forward left.
      for (let i = row + 1, j = col - 1; (i < 8) && (j > -1); i++ , j--) {
        if (board[i][j].substr(0, 1) !== colour) {
          moves.push([i, j]);

          if (board[i][j].substr(0, 1) === opponent) {
            break;
          }
        } else {
          break;
        }
      }

      // Forward right.
      for (let i = row + 1, j = col + 1; (i < 8) && (j < 8); i++ , j++) {
        if (board[i][j].substr(0, 1) !== colour) {
          moves.push([i, j]);

          if (board[i][j].substr(0, 1) === opponent) {
            break;
          }
        } else {
          break;
        }
      }

      // Backward left.
      for (let i = row - 1, j = col - 1; (i > -1) && (j > -1); i-- , j--) {
        if (board[i][j].substr(0, 1) !== colour) {
          moves.push([i, j]);

          if (board[i][j].substr(0, 1) === opponent) {
            break;
          }
        } else {
          break;
        }
      }

      // Backward right.
      for (let i = row - 1, j = col + 1; (i > -1) && (j < 8); i-- , j++) {
        if (board[i][j].substr(0, 1) !== colour) {
          moves.push([i, j]);

          if (board[i][j].substr(0, 1) === opponent) {
            break;
          }
        } else {
          break;
        }
      }
    } else if (piece === pieces.queen) {
      // Forward.
      for (let i = row + 1; i < 8; i++) {
        if (board[i][col].substr(0, 1) !== colour) {
          moves.push([i, col]);

          if (board[i][col].substr(0, 1) === opponent) {
            break;
          }
        } else {
          break;
        }
      }

      // Backward.
      for (let i = row - 1; i > -1; i--) {
        if (board[i][col].substr(0, 1) !== colour) {
          moves.push([i, col]);

          if (board[i][col].substr(0, 1) === opponent) {
            break;
          }
        } else {
          break;
        }
      }

      // Left.
      for (let j = col - 1; j > -1; j--) {
        if (board[row][j].substr(0, 1) !== colour) {
          moves.push([row, j]);

          if (board[row][j].substr(0, 1) === opponent) {
            break;
          }
        } else {
          break;
        }
      }

      // Right.
      for (let j = col + 1; j < 8; j++) {
        if (board[row][j].substr(0, 1) !== colour) {
          moves.push([row, j]);

          if (board[row][j].substr(0, 1) === opponent) {
            break;
          }
        } else {
          break;
        }
      }

      // Forward left.
      for (let i = row + 1, j = col - 1; (i < 8) && (j > -1); i++ , j--) {
        if (board[i][j].substr(0, 1) !== colour) {
          moves.push([i, j]);

          if (board[i][j].substr(0, 1) === opponent) {
            break;
          }
        } else {
          break;
        }
      }

      // Forward right.
      for (let i = row + 1, j = col + 1; (i < 8) && (j < 8); i++ , j++) {
        if (board[i][j].substr(0, 1) !== colour) {
          moves.push([i, j]);

          if (board[i][j].substr(0, 1) === opponent) {
            break;
          }
        } else {
          break;
        }
      }

      // Backward left.
      for (let i = row - 1, j = col - 1; (i > -1) && (j > -1); i-- , j--) {
        if (board[i][j].substr(0, 1) !== colour) {
          moves.push([i, j]);

          if (board[i][j].substr(0, 1) === opponent) {
            break;
          }
        } else {
          break;
        }
      }

      // Backward right.
      for (let i = row - 1, j = col + 1; (i > -1) && (j < 8); i-- , j++) {
        if (board[i][j].substr(0, 1) !== colour) {
          moves.push([i, j]);

          if (board[i][j].substr(0, 1) === opponent) {
            break;
          }
        } else {
          break;
        }
      }
    } else if (piece === pieces.king) {
      // Forward.
      if ((row + 1) < 8) {
        // Straight.
        if (board[row + 1][col].substr(0, 1) !== colour) {
          moves.push([row + 1, col]);
        }

        // Left.
        if (((col - 1) > -1) && (board[row + 1][col - 1].substr(0, 1) !== colour)) {
          moves.push([row + 1, col - 1]);
        }

        // Right.
        if (((col + 1) < 8) && (board[row + 1][col + 1].substr(0, 1) !== colour)) {
          moves.push([row + 1, col + 1]);
        }
      }

      // Backward.
      if ((row - 1) > -1) {
        // Straight.
        if (board[row - 1][col].substr(0, 1) !== colour) {
          moves.push([row - 1, col]);
        }

        // Left.
        if (((col - 1) > -1) && (board[row - 1][col - 1].substr(0, 1) !== colour)) {
          moves.push([row - 1, col - 1]);
        }

        // Right.
        if (((col + 1) < 8) && (board[row - 1][col + 1].substr(0, 1) !== colour)) {
          moves.push([row - 1, col + 1]);
        }
      }

      // Left.
      if (((col - 1) > -1) && (board[row][col - 1].substr(0, 1) !== colour)) {
        moves.push([row, col - 1]);
      }

      // Right.
      if (((col + 1) < 8) && (board[row][col + 1].substr(0, 1) !== colour)) {
        moves.push([row, col + 1]);
      }
    }

    return moves;
  }
};