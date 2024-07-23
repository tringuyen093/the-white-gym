import { IVariable } from './types';

const mediaQuery: IVariable = {
  aboveBiggerDesktop: '@media (min-width: 1500px)',
  belowBiggerDesktop: '@media (max-width: 1499px)',
  aboveDesktop: '@media (min-width: 1140px)',
  belowDesktop: '@media (max-width: 1139px)',
  betweenDesktopAndTablet: '@media (max-width: 1139px) and (min-width: 768px)',
  aboveTablet: '@media (min-width: 768px)',
  belowTablet: '@media (max-width: 767px)',
  above420: '@media (min-width: 420px)',
  below420: '@media (max-width: 419px)',
  above375: '@media (min-width: 375px)',
  below375: '@media (max-width: 374px)',
  above360: '@media (min-width: 360px)',
  below360: '@media (max-width: 359px)',
};

export default mediaQuery;
