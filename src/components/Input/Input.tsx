import { ComponentProps, ElementRef, MouseEvent, ReactElement, forwardRef, useId, useMemo } from 'react';

import { styled, VariantProps, CSS } from '../../stitches.config';
import { useObjectRef } from '@react-aria/utils';

export const StyledInput = styled('input', {
  flex: 1,
  display: 'block',
  padding: '$1_5 $3',
  borderRadius: '$rounded',
  border: 'none',
  outline: 'none',

  variants: {
    prepend: {
      true: {
        paddingLeft: '$0_5',
      },
    },
    append: {
      true: {
        paddingRight: '$0_5',
      },
    },
  },
});

const StyledInputGroup = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  borderRadius: '$rounded',
  border: '1px solid',
  borderColor: '$neutralBorderHover',
  backgroundColor: '$white',

  '&:focus-within': {
    outline: '1px solid',
    outlineColor: '$accentSolid',
    borderColor: '$accentSolid',
  },

  variants: {
    isInvalid: {
      true: {
        borderColor: '$dangerSolid',

        '&:focus-within': {
          outlineColor: '$dangerSolid',
          borderColor: '$dangerSolid',
        },
      },
    },
  },
});

const StyledInputGroupItem = styled('div', {
  display: 'flex',
  padding: '0 $2',
});

type InputVariants = VariantProps<typeof StyledInput>;
type InputExtraProps = {
  css?: CSS;
  prepend?: ReactElement[] | ReactElement;
  append?: ReactElement[] | ReactElement;
  isInvalid: VariantProps<typeof StyledInputGroup>['isInvalid'];
};

type InputOwnProps = Omit<InputVariants, 'prepend' | 'append'> & InputExtraProps;
type InputProps = InputOwnProps & ComponentProps<'input'>;

const getItems = (items?: ReactElement[] | ReactElement): ReactElement[] => {
  if (!items) {
    return [];
  }

  return Array.isArray(items) ? items : [items];
};

export const Input = forwardRef<ElementRef<typeof StyledInput>, InputProps>((props, ref) => {
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

  return (
    <StyledInputGroup isInvalid={isInvalid} onPointerDown={handlePointerDown}>
      {prependItems.map((item, i) => (
        <StyledInputGroupItem key={`${uniq}_prepend__${i}`}>{item}</StyledInputGroupItem>
      ))}
      <StyledInput {...rest} ref={inputRef} prepend={prependItems.length > 0} append={appendItems.length > 0} />
      {appendItems.map((item, i) => (
        <StyledInputGroupItem key={`${uniq}_append__${i}`}>{item}</StyledInputGroupItem>
      ))}
    </StyledInputGroup>
  );
});

Input.displayName = 'Input';

export default Input;
