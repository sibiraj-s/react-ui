import { ComponentProps, ElementRef, MouseEvent, ReactElement, forwardRef, useId, useMemo } from 'react';

import useObjectRef from '@/hooks/use-object-ref';
import { InputRecipeVariantProps, inputRecipe } from 'styled-system/recipes';
import { cx } from 'styled-system/css';

type InputVariants = ComponentProps<'input'>;
type InputExtraProps = {
  prepend?: ReactElement[] | ReactElement;
  append?: ReactElement[] | ReactElement;
  isInvalid: InputRecipeVariantProps['isInvalid'];
};

type InputOwnProps = Omit<InputVariants, 'prepend' | 'append'> & InputExtraProps;
type InputProps = InputOwnProps & ComponentProps<'input'>;
type InputElementType = ElementRef<'input'>;

const getItems = (items?: ReactElement[] | ReactElement): ReactElement[] => {
  if (!items) {
    return [];
  }

  return Array.isArray(items) ? items : [items];
};

export const Input = forwardRef<InputElementType, InputProps>((props, ref) => {
  const { prepend, append, isInvalid, ...rest } = props;

  const inputRef = useObjectRef(ref);
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
    <div className={inputClasses.root} onPointerDown={handlePointerDown}>
      {prependItems.map((item, i) => (
        <div className={inputClasses.item} key={`${uniq}_prepend__${i}`}>
          {item}
        </div>
      ))}
      <input {...rest} className={cx(inputClasses.input, props.className)} ref={inputRef} />
      {appendItems.map((item, i) => (
        <div className={inputClasses.item} key={`${uniq}_append__${i}`}>
          {item}
        </div>
      ))}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
