import { ComponentProps, ElementRef, MouseEvent, ReactElement, forwardRef, useId, useMemo } from 'react';
import { styled } from 'styled-system/jsx';

import useObjectRef from '@/hooks/use-object-ref';

export const StyledInput = styled('input', {
  base: {
    flex: 1,
    display: 'block',
    py: '1.5',
    px: '3',
    borderRadius: 'md',
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
  },

  variants: {
    prepend: {
      true: {
        paddingLeft: '0.5',
      },
    },
    append: {
      true: {
        paddingRight: '0.5',
      },
    },
  },
});

const StyledInputGroup = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    borderRadius: 'md',
    border: '1px solid token(colors.neutral.bgHover)',
    colorPalette: 'primary',

    '&:focus-within': {
      outline: '1px solid token(colorPalette.solid)',
      borderColor: 'colorPalette.solid',
    },
  },

  variants: {
    isInvalid: {
      true: {
        colorPalette: 'danger',
        borderColor: 'danger.border',
      },
    },
  },
});

const StyledInputGroupItem = styled('div', {
  base: {
    display: 'flex',
    py: '0',
    px: '2',
  },
});

type InputVariants = ComponentProps<typeof StyledInput>;
type InputExtraProps = {
  prepend?: ReactElement[] | ReactElement;
  append?: ReactElement[] | ReactElement;
  isInvalid: ComponentProps<typeof StyledInputGroup>['isInvalid'];
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
