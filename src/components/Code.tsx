import React, { PropsWithChildren } from "react";

export function withCodeRenderer({
  className,
  lineNumberOffset,
  lineNumbers,
}: CodeProps = {}) {
  return ({ children }: PropsWithChildren) => {
    return (
      <Code
        className={className}
        lineNumberOffset={lineNumberOffset}
        lineNumbers={lineNumbers}
      >
        {children}
      </Code>
    );
  };
}

export type CodeProps = {
  readonly className?: string;
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
