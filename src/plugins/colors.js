import { genVariations } from 'vuetify/lib/services/theme/utils'
import { colorToInt }  from 'vuetify/lib/util/colorUtils'

// Optionally Use Vuetify Colors
// import colors from 'vuetify/lib/util/colors'

//   primary #2a3783
export const primary = Object.freeze(genVariations('blue', colorToInt('#2A3783')));
//   tertiary #2a6483 or #492a83
export const tertiary= Object.freeze(genVariations('blue-tertiary', colorToInt('#492a83')));
//   accent #762a83 or #832a37
export const accent = Object.freeze(genVariations('blue-accent', colorToInt('#762a83')));
//   error #832a37
export const error = Object.freeze(genVariations('error', colorToInt('#832a37')));
//   warning #83762a or #dfe57c
export const warning = Object.freeze(genVariations('warning', colorToInt('#dfe57c')));
//   info #93dbe7 or #2a6483 or #2a50c3
export const info = Object.freeze(genVariations('info', colorToInt('#2a6483')));
//   success #50c32a or #9dc32a or #2ac39d
export const success = Object.freeze(genVariations('success', colorToInt('#9dc32a')));





//   secondary #c39c2a
export const secondary = Object.freeze(genVariations('blue', colorToInt('#c39c2a')));
