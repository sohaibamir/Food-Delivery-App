import {StyleSheet} from 'react-native';

const deafult = {
  settings: {
    primary: 'rgba(0, 151, 254, 1)',
    secondary: 'rgba(241, 246, 252, 1)',
    cardBg: 'rgba(241, 246, 252, 1)',
  },
};

const theme = StyleSheet.create({
  primary: {backgroundColor: deafult.settings.primary},
  secondary: {backgroundColor: deafult.settings.secondary},
  default: {backgroundColor: '#ffffff'},
  cardBg: {backgroundColor: deafult.settings.cardBg},
  defaultColor: {color: 'rgba(41, 55, 82, 1)'},
});

export default theme;
