import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from '../colors';
import ColorManipulator from '../../utils/color-manipulator';
import Spacing from '../spacing';

/*
 * TT theme
 */


const COLORS = {
  baseBackground:'#fcfcfc',
  baseGreyDetail:'#e9e9e9',
  primary1Color:'#6fcedc',
  primary2Color:'#4cc3d4',
  primaryGradient:"linear-gradient(#83e2f0, #74d7e6)",
  primaryDetail: '#4cc3d4',
  secondaryColor:'#50627b',
  white:'#fff'
};

const FONTS = {
  baseBackground:'#fcfcfc',
  baseGreyDetail:'#e9e9e9'
};

export default {
  spacing: Spacing,
  fontFamily: 'Proxima Nova',
  palette: {
    primary1Color: COLORS.primary1Color,
    primary2Color: COLORS.primary2Color,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: ColorManipulator.fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: ColorManipulator.fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
};
