import palette from '../palette';
import type { Fills } from '../types';

export const fills: Fills = {
  solid: {
    default: {
      backgroundColor: palette.default.base,
      color: 'white',
    },

    blue: {
      backgroundColor: palette.blue.base,
      color: 'white',
    },

    red: {
      backgroundColor: palette.red.base,
      color: 'white',
    },

    orange: {
      backgroundColor: palette.orange.base,
      color: 'white',
    },

    yellow: {
      backgroundColor: palette.yellow.base,
      color: palette.yellow.darkest,
    },

    green: {
      backgroundColor: palette.green.base,
      color: 'white',
    },

    teal: {
      backgroundColor: palette.teal.base,
      color: 'white',
    },

    purple: {
      backgroundColor: palette.purple.base,
      color: 'white',
    },
  },

  subtle: {
    default: {
      backgroundColor: palette.default.light,
      color: palette.default.darkest,
    },

    blue: {
      backgroundColor: palette.blue.light,
      color: palette.blue.darkest,
    },

    red: {
      backgroundColor: palette.red.light,
      color: palette.red.darkest,
    },

    orange: {
      backgroundColor: palette.orange.light,
      color: palette.orange.darkest,
    },

    yellow: {
      backgroundColor: palette.yellow.light,
      color: palette.yellow.darkest,
    },

    green: {
      backgroundColor: palette.green.light,
      color: palette.green.darkest,
    },

    teal: {
      backgroundColor: palette.teal.light,
      color: palette.teal.darkest,
    },

    purple: {
      backgroundColor: palette.purple.light,
      color: palette.purple.darkest,
    },
  },
};
