import { HTMLStyledProps, styled } from 'styled-system/jsx';
import rx from '@/utils/factory';
import { textRecipe } from 'styled-system/recipes';

export const Text = styled(rx.p, textRecipe);
export type TextProps = HTMLStyledProps<typeof Text>;

Text.displayName = 'Text';

export default Text;
