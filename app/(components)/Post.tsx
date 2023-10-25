import { FunctionComponent } from "react";

export const Post: FunctionComponent<{ content: string }> = ({ content }) => (
  <article>
    <span>{content}</span>
  </article>
);
