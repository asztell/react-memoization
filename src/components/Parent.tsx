import { memo, useState, useCallback, useMemo } from "react";
import { Child, MemoedChild } from "./Child";

export function Parent({
  label,
  grandParentState = "undefined",
  parentState
}: {
  label: string;
  grandParentState?: number | "undefined";
  parentState: number;
}): JSX.Element {
  console.log(`${label} render`);

  const [state, setState] = useState(0);
  const [childState, setChildState] = useState({ number: 0 });
  // const [childState, setChildState] = useState(0);

  const handleChildClick = useCallback((): void => {
    setChildState((prev) => {
      // return { number: prev.number + 1 };
      return { number: prev.number };
      // return prev + 1;
    });
  }, [setChildState]);

  function handleClick(): void {
    setState((prev) => prev + 1);
  }

  return (
    <div
      className={label}
      style={{ display: "flex", flexDirection: "column", marginRight: "20px" }}
    >
      <h1>{label}</h1>
      <div>GrandParent state: {grandParentState}</div>
      <div>
        {label} state from GrandParent: {parentState}
      </div>
      <div>
        {label} state: {state}
      </div>
      {/* <button onClick={handleClick}>{label} state +1</button> */}
      <button onClick={handleChildClick}>{label} state +1</button>
      <Child
        state={useMemo(() => childState, [childState])}
        label="Child"
        // state={childState}
        onClick={handleChildClick}
      />
      <MemoedChild
        // state={useMemo(() => childState, [childState])}
        label="MemoedChild"
        state={childState}
        onClick={handleChildClick}
      />
    </div>
  );
}

export const MemoedParent = memo(Parent);
