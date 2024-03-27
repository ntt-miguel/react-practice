import { Children } from "react";

export default function Row({ children }) {
  return (
    <div className="row">
      {Children.map(children, (child) => (
        <div>{child}</div>
      ))}
    </div>
  );
}
