import { useState, useMemo } from "react";
import { Parent, MemoedParent, Stats } from "./";

export function GrandParent(): JSX.Element {
  const [state, setState] = useState(0);
  const [parentState, setParentState] = useState(0);
  console.log("GrandParent render");
  return (
    <div className="GrandParent">
      <h1>GrandParent</h1>
      <div>GrandParent state: {state}</div>
      <button
        onClick={() => {
          setState((prev) => prev + 1);
        }}
      >
        GrandParent state +1
      </button>
      <br />
      <br />
      <div>Parent state: {parentState}</div>
      <button
        onClick={() => {
          setParentState((prev) => prev + 1);
        }}
      >
        Parent state +1
      </button>
      <br />
      <br />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Parent
            label="Parent"
            // grandParentState={useMemo(() => state, [state])}
            parentState={useMemo(() => parentState, [parentState])}
            // parentState={parentState}
          />
          <MemoedParent
            label="MemoedParent"
            // grandParentState={useMemo(() => state, [state])}
            parentState={parentState}
          />
        </div>
        <br />
        <div>{/* <Stats /> */}</div>
      </div>
    </div>
  );
}
