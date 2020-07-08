import * as colors from './colors'

// Optionally Use Vuetify Colors
// import colors from 'vuetify/lib/util/colors'


// Primary Theme (Main Theme Colors)
export const primary = {
  primary: colors.primary,
  secondary: colors.secondary,
  tertiary: colors.tertiary,
  accent: colors.accent,
  error: colors.error,
  warning: colors.warning,
  info: colors.info,
  success: colors.success,
};

// Secondary Theme (Inverted Primary Colors)
// FIXME: Update to real colors and finalize
export const secondary = {
  primary: colors.secondary,
  secondary: colors.primary,
  tertiary: colors.tertiary, // #2a6483 or #492a83
  accent: colors.accent, // #762a83 or #832a37
  error: colors.error, // maybe #832a37
  warning: colors.warning, // maybe #83762a or #dfe57c
  info: colors.info, // maybe #93dbe7 or #2a6483 or #2a50c3
  success: colors.success,
};

// Accent Theme
// TODO: Once Primary/Secondary is final create the accent theme

// Tertiary Theme
// TODO: Once Primary/Secondary is final create the tertiary theme