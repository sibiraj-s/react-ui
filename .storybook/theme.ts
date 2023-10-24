import { create } from '@storybook/theming';
import { token } from '../styled-system/tokens';

export default create({
  base: 'light',
  brandTitle: 'React UI',
  brandUrl: 'https://github.com/sibiraj-s/react-ui',
  brandTarget: '_blank',
  fontBase: token('fonts.sans'),
});
