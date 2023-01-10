import React, { PropsWithChildren } from "react";

export function withCodeRenderer({
  lineNumberOffset,
  lineNumbers,
}: CodeProps = {}) {
  return ({ children }: PropsWithChildren) => {
    return (
      <Code lineNumberOffset={lineNumberOffset} lineNumbers={lineNumbers}>
        {children}
      </Code>
    );
  };
}

export type CodeProps = {
  readonly lineNumbers?: string | boolean;
  readonly lineNumberOffset?: string | number;
};
export default function Code({
  children,
  lineNumbers,
  lineNumberOffset,
  ...props
}: PropsWithChildren<CodeProps>) {
  return (
    <code
      {...props}
      data-line-numbers={lineNumbers}
      data-ln-start-from={lineNumberOffset}
    >
      {children}
    </code>
  );
}
