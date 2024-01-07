import { styled } from 'styled-system/jsx';
import { buttonRecipe } from 'styled-system/recipes';

import rx from '@/utils/factory';

export const Button = styled(rx.button, buttonRecipe, {
  defaultProps: {
    type: 'button',
  },
});
Button.displayName = 'Button';

export default Button;
