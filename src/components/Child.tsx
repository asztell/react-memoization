import { useState, memo } from "react";
import { useStats } from "../contexts";

export const Child = function Child({
  label = "",
  state: childStateFromParent,
  onClick
}: {
  label?: string;
  state: number;
  onClick: React.MouseEventHandler;
}): JSX.Element {
  const [state, setState] = useState(0);
  const { updateStats } = useStats();
  // console.log("updateStats", updateStats);
  // ezt ha meghivom endless loop
  // updateStats(`Child no ${label} rendered`);
  console.log(`${label} rendered`);
  function onChildClick(): void {
    setState((prev) => prev + 1);
    // onClick()
  }
  function onStateFromParentClick(): void {
    setState((prev) => prev + 1);
    // onClick()
  }
  return (
    <div className={label}>
      <br />
      <br />
      <h1>{label}</h1>
      <div>
        {label} state from parent: {childStateFromParent}
      </div>
      {/* <button onClick={onClick}>Child state +1</button> */}
      <button onClick={onStateFromParentClick}>
        Child state from parent +1
      </button>
      <br />
      <div>Child state: {state}</div>
      <button onClick={onChildClick}>Child state +1</button>
    </div>
  );
  // })
};

export const MemoedChild = memo(Child);
