import { Component } from "@duox/jsml";
import { Div } from "./div";
import { H } from "./h";

export const Layout = (title: string, child: Component[]) => Div({
  child: [
    H(title, 3),
    Div({ child }),
  ],
});
