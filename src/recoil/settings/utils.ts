import {
  // lightTemplate,
  themeDictionary,
} from '@styles';
import {
  chainConfig,
} from '@configs';
import {
  Theme,
} from './types';

// ================================
// CONSTANTS
// ================================

export const THEME_LIST: Theme[] = chainConfig.style.themeList as Theme[];

export const THEME_DICTIONARY = themeDictionary;

export const getThemeTemplate = (theme: Theme) => {
  if (THEME_DICTIONARY[theme]) {
    return THEME_DICTIONARY[theme];
  }

  return THEME_DICTIONARY.light || THEME_DICTIONARY.dark;
};

export const DATE_LIST = [
  'locale',
  'utc',
];

export const TX_LIST = [
  'compact',
  'detailed',
];
