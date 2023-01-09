import React, { PropsWithChildren } from "react";

export default function Notes({ children }: PropsWithChildren) {
  return <aside className="notes">{children}</aside>;
}
