import { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType } from 'react';

export type AsProp<E extends ElementType> = {
  as?: E;
};

export type PolymorphicComponentProps<E extends ElementType, Props = {}> = AsProp<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof Props>;
export type PolymorphicRef<E extends ElementType> = ComponentPropsWithRef<E>['ref'];
