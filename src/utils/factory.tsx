import {
  Children,
  ComponentProps,
  ComponentPropsWithRef,
  ElementType,
  ForwardRefExoticComponent,
  cloneElement,
  forwardRef,
  isValidElement,
  JSX,
  ReactElement,
} from 'react';
import { mergeProps } from '@react-aria/utils';

import composeRefs from './compose-refs';
import getRef from './get-ref';

type AsChildProp = { asChild?: boolean };
type RxPropsWithRef<E extends ElementType> = ComponentPropsWithRef<E> & AsChildProp;
type RxForwardRefComponent<E extends ElementType> = ForwardRefExoticComponent<RxPropsWithRef<E>>;
type JsxElements = { [E in keyof JSX.IntrinsicElements]: RxForwardRefComponent<E> };
type RxComponent<T extends ElementType> = {
  (props: ComponentProps<T>): JSX.Element;
  displayName?: string;
};
type JsxFactory = <T extends ElementType>(component: T) => RxComponent<T>;

interface Props {
  [key: string]: any;
}
type PropsArg = Props | null | undefined;

const withAsChild = (Component: ElementType) => {
  const WrappedComponent = forwardRef<unknown, RxPropsWithRef<typeof Component>>((props, forwardedRef) => {
    const { asChild, children, ...restProps } = props;

    if (asChild !== true) {
      return (
        <Component {...restProps} ref={forwardedRef}>
          {children}
        </Component>
      );
    }

    try {
      const onlyChild = Children.only<ReactElement<Props>>(children);

      if (!isValidElement(onlyChild)) {
        return null;
      }

      const childRef = getRef(onlyChild);

      return cloneElement(onlyChild, {
        ...mergeProps(restProps, onlyChild.props as PropsArg[]),
        ref: forwardedRef ? composeRefs(forwardedRef, childRef) : childRef,
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
  }) as unknown as JsxFactory & JsxElements;
};

const rx = jsxFactory();

export default rx;
