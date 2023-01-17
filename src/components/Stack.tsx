import React, { PropsWithChildren } from "react";

export type StackProps = PropsWithChildren;
export default function Stack({ children }: StackProps) {
  return <div className="r-stack">{children}</div>;
}
