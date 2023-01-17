import classNames from "classnames";
import React, { PropsWithChildren } from "react";

export const FragmentDefaultAsType = "div" as const;
export type FragmentDefaultAsType = typeof FragmentDefaultAsType;

export enum FragmentEffect {
  FadeOut = "fade-out",
  FadeUp = "fade-up",
  FadeDown = "fade-down",
  FadeLeft = "fade-left",
  FadeRight = "fade-right",
  FadeInThenOut = "fade-in-then-out",
  FadeInThenSemiOut = "fade-in-then-semi-out",
  Grow = "grow",
  SemiFadeOut = "semi-fade-out",
  Shrink = "shrink",
  Strike = "strike",
  HighlightRed = "highlight-red",
  HighlightGreen = "highlight-green",
  HighlightBlue = "highlight-blue",
  HighlightCurrentRed = "highlight-current-red",
  HighlightCurrentGreen = "highlight-current-green",
  HighlightCurrentBlue = "highlight-current-blue",
}

export type FragmentProps<TElement extends React.ElementType> =
  PropsWithChildren<{
    readonly as?: TElement;
    readonly title?: React.ReactNode;
    readonly effect?: FragmentEffect;
  }>;
export default function Fragment<TElement extends React.ElementType>({
  as,
  children,
  effect = FragmentEffect.FadeInThenOut,
  title,
}: FragmentProps<TElement>) {
  const Tag = as || FragmentDefaultAsType;
  return (
    <Tag className={classNames("fragment", effect)}>
      {title && <h4>{title}</h4>}
      {children}
    </Tag>
  );
}
