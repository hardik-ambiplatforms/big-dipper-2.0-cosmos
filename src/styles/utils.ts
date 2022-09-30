import * as R from 'ramda';
import { ThemeOptions } from '@material-ui/core/styles';
import { chainConfig } from '@configs';
import { common } from './theme/index';

export const makeTemplate = (themeType: string) :ThemeOptions => {
  const [theme] = chainConfig.style.themes.filter((t) => t.type === themeType);

  const {
    background, primary, divider, text, fonts,
    primaryData, results, tokenomics, condition, charts,
  } = theme;

  /** Custom theme overrides for light mode */
  const ThemeOverride = {
    mixins: {
      tableCell: {
        background: background.surfaceOne, // surface one
        '&.odd': {
          background: background.surfaceTwo, // surface two
        },
      },
    },
    palette: {
      type: theme.type,
      primary: {
        main: primary.main,
        contrastText: primary.contrastText,
      },
      background: {
        default: background.default,
        paper: background.surfaceOne,
      },
      divider,
      text: {
        primary: text.primary,
        secondary: text.secondary,
      },
      custom: {
        general: {
          background: background.default, // same as background default
          surfaceOne: background.surfaceOne, // same as background paper
          surfaceTwo: background.surfaceTwo, // striped tables
        },
        fonts: {
          fontOne: fonts.fontOne,
          fontTwo: fonts.fontTwo,
          fontThree: fonts.fontThree,
          fontFour: fonts.fontFour,
          fontFive: fonts.fontFive,
          highlight: fonts.highlight,
        },
        primaryData: {
          one: primaryData.one,
          two: primaryData.two,
          three: primaryData.three,
          four: primaryData.four,
        },
        results: {
          pass: results.pass,
          fail: results.fail,
        },
        tokenomics: {
          one: tokenomics.one,
          two: tokenomics.two,
          three: tokenomics.three,
        },
        condition: {
          zero: condition.zero,
          one: condition.one,
          two: condition.two,
          three: condition.three,
        },
        charts: {
          zero: charts.zero,
          one: charts.one,
          two: charts.two,
          three: charts.three,
          four: charts.four,
          five: charts.five,
        },
      },
    },
    overrides: {
      MuiTableBody: {
        root: {
          '& .MuiTableRow-root': {
            '&:nth-child(odd)': {
              backgroundColor: background.surfaceTwo, // surface two
            },
          },
          '& .MuiTableCell-root': {
            color: fonts.fontTwo, // font two
          },
        },
      },
      MuiTabs: {
        root: {
          '& .MuiTab-textColorInherit': {
            color: fonts.fontThree, // font three
          },
          '& .MuiTab-textColorInherit.Mui-selected': {
            color: fonts.fontOne, // font one
          },
          '& .MuiTabs-indicator': {
            backgroundColor: fonts.fontOne, // font one (?)
          },
        },
      },
    },
  };

  const themeTemplate:ThemeOptions = R.mergeDeepLeft(ThemeOverride, common);

  return themeTemplate;
};
