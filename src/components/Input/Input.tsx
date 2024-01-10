import { ElementRef, MouseEvent, ReactElement, forwardRef, useId, useMemo } from 'react';
import useObjectRef from '@/hooks/use-object-ref';
import { InputRecipeVariantProps, inputRecipe } from 'styled-system/recipes';
import { cx } from 'styled-system/css';
import { ComponentProps } from 'styled-system/types';
import { Box, BoxProps, splitCssProps } from 'styled-system/jsx';

export type InputExtraProps = {
  prepend?: ReactElement[] | ReactElement;
  append?: ReactElement[] | ReactElement;
};

type InputOwnProps = ComponentProps<'input'> & InputRecipeVariantProps & InputExtraProps;

type InputProps = InputOwnProps & Omit<BoxProps, keyof InputOwnProps>;
type InputElementType = ElementRef<'input'>;

const getItems = (items?: ReactElement[] | ReactElement): ReactElement[] => {
  if (!items) {
    return [];
  }

  return Array.isArray(items) ? items : [items];
};

export const Input = forwardRef<InputElementType, InputProps>((props, forwardedRef) => {
  const { prepend, append, isInvalid, ...rest } = props;
  const [cssProps, restProps] = splitCssProps(rest);

  const inputRef = useObjectRef(forwardedRef);
  const uniq = useId();

  const prependItems = useMemo(() => getItems(prepend), [prepend]);
  const appendItems = useMemo(() => getItems(append), [append]);

  const handlePointerDown = (event: MouseEvent) => {
    const input = inputRef.current;
    const target = event.target as HTMLElement;

    if (target.closest('input')) {
      return;
    }

    const position = input.compareDocumentPosition(target);

    const targetIsBeforeInput = (position && Node.DOCUMENT_POSITION_PRECEDING) !== 0;
    const cursorPosition = targetIsBeforeInput ? 0 : input.value.length;

    requestAnimationFrame(() => {
      input.setSelectionRange(cursorPosition, cursorPosition);
      input.focus();
    });
  };

  const inputClasses = inputRecipe({
    isInvalid,
    prepend: prependItems.length > 0,
    append: appendItems.length > 0,
  });

  return (
    <Box {...cssProps} className={inputClasses.root} onPointerDown={handlePointerDown}>
      {prependItems.map((item, i) => (
        <div className={inputClasses.item} key={`${uniq}_prepend__${i}`}>
          {item}
        </div>
      ))}
      <input {...restProps} className={cx(inputClasses.input, props.className)} ref={inputRef} />
      {appendItems.map((item, i) => (
        <div className={inputClasses.item} key={`${uniq}_append__${i}`}>
          {item}
        </div>
      ))}
    </Box>
  );
});

Input.displayName = 'Input';

export default Input;
