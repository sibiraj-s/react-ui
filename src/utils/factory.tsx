import {
  Children,
  ComponentPropsWithRef,
  ElementType,
  ForwardRefExoticComponent,
  cloneElement,
  forwardRef,
} from 'react';
import { mergeProps } from 'react-aria';

import composeRefs from './compose-refs';

type AsChildProp = { asChild?: boolean };
type RxPropsWithRef<E extends ElementType> = ComponentPropsWithRef<E> & AsChildProp;
type RxForwardRefComponent<E extends ElementType> = ForwardRefExoticComponent<RxPropsWithRef<E>>;
type JsxElements = { [E in keyof JSX.IntrinsicElements]: RxForwardRefComponent<E> };

const withAsChild = (Component: ElementType) => {
  const WrappedComponent = forwardRef<unknown, RxPropsWithRef<typeof Component>>((props, forwardedRef) => {
    const { asChild, children, ...restProps } = props;

    if (asChild !== true) {
      return <Component {...props} ref={forwardedRef} />;
    }

    try {
      const onlyChild = Children.only(children);

      return cloneElement(onlyChild, {
        ...mergeProps(restProps, onlyChild.props),
        ref: forwardedRef ? composeRefs(forwardedRef, onlyChild.ref) : onlyChild.ref,
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }

    return null;
  });

  WrappedComponent.displayName = Component.toString();
  return WrappedComponent;
};

export const jsxFactory = () => {
  const cache = new Map();

  return new Proxy(withAsChild, {
    apply(_target, _thisArg, argArray: ElementType[]) {
      return withAsChild(argArray[0]);
    },
    get(_, element) {
      const asElement = element as ElementType;
      if (!cache.has(asElement)) {
        cache.set(asElement, withAsChild(asElement));
      }
      return cache.get(asElement);
    },
  }) as unknown as JsxElements;
};

const rx = jsxFactory();

export default rx;
