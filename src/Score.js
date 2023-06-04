import { useGame } from "./Game";
import { FullScreen } from "./FullScreen";

const wrapStyle = {
  top: "5%",
  width: "25rem",
  maxWidth: "95%",
  position: "absolute",
  fontSize: "3rem",
  pointerEvents: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "1.5rem 0",
  color: "black",
  borderRadius: "2rem",
  backdropFilter: "blur(2px)",
  backgroundColor: "rgba(0,255,255, 0)",
  boxShadow: "rgba(0, 0, 0, 0.3) 2px 8px 8px",
  border: "1px rgba(255,255,255,0.4) solid",
  borderBottom: "1px rgba(40,40,40,0.35) solid",
  borderRight: "1px rgba(40,40,40,0.35) solid"
};

const spanStyle = { marginLeft: "1rem", fontSize: "1.5rem" };

export const Score = () => {
  const { _, reset, change } = useGame();
  return (
    <FullScreen display>
      <div style={wrapStyle}>
        <div>
          {_.end && _.score[0] > _.score[1] && "winnter"}
          {_.score[0]}:{_.score[1]}
          {_.end && _.score[0] < _.score[1] && "winnter"}
          {_.end && _.score[0] === _.score[1] && "draw"}
        </div>
        <div>
          <button onClick={reset[0]}>{"◀◀"}</button>
          <button onClick={reset[_.move - 1]}>{"◀"}</button>
          <span style={spanStyle}>stone</span>
          <button onClick={change["stone+"]}>+</button>
          <button onClick={change["stone-"]}>-</button>
          <span style={spanStyle}>length</span>
          <button onClick={change["length+"]}>+</button>
          <button onClick={change["length-"]}>-</button>
        </div>
      </div>
    </FullScreen>
  );
};
