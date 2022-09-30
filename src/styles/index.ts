import { chainConfig } from '@configs';
import { ThemeOptions } from '@material-ui/core/styles';
import { makeTemplate } from './theme/utils';

type ThemeDictionaryType = {
  light?: ThemeOptions;
  dark?: ThemeOptions;
  deuteranopia?: ThemeOptions;
  tritanopia?: ThemeOptions;
};

// getThemeDictionary allows to return a theme dictionary according to the config theme list
const getThemeDictionary = (list: string[]) :ThemeDictionaryType => {
  const themeDict: ThemeDictionaryType = {};
  const lightTemplate = makeTemplate('light');
  const darkTemplate = makeTemplate('dark');

  for (let i = 0; i < list.length; i += 1) {
    if (list[i] === 'light') themeDict.light = lightTemplate;
    if (list[i] === 'dark') themeDict.dark = darkTemplate;
    // if (list[i] === 'deuteranopia') themeDict.deuteranopia = makeTemplate('deuteranopia');
    // if (list[i] === 'tritanopia') themeDict.tritanopia = makeTemplate('tritanopia');
  }

  return themeDict;
};

const themeDictionary = getThemeDictionary(chainConfig.style.themeList);

export {
  makeTemplate,
  themeDictionary,
};
