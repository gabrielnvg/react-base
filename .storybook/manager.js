import { addons } from '@storybook/addons';
import myCustomTheme from './myCustomTheme';

addons.setConfig({
  theme: myCustomTheme,
  showPanel: false,
});
