import { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType, PropsWithoutRef } from 'react';

export type PropsWithAs<T extends ElementType, Props = {}> = Props & { as?: T };
export type Merge<T, U> = Omit<T, keyof U> & U;

export type PolymorphicPropsWithoutRef<T extends ElementType, Props = {}> = Merge<
  T extends keyof JSX.IntrinsicElements ? PropsWithoutRef<JSX.IntrinsicElements[T]> : ComponentPropsWithoutRef<T>,
  PropsWithAs<T, Props>
>;

export type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>['ref'];
