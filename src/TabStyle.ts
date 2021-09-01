import { CSSProperties } from "react";

export const TAB: CSSProperties = {
  flexGrow: 1,
  boxSizing: "border-box",
  padding: "16px 30px",
  cursor: "pointer",
  opacity: 0.7,
  maxWidth: "fit-content"
};
export const DISABLE_TAB: CSSProperties = {
  cursor: "no-drop",
  opacity: 0.4
};
export const ACTIVE_TAB: CSSProperties = {
  borderBottom: "2px solid orange",
  cursor: "default",
  opacity: 1
};

export const TAB_LAYOUT: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap"
};
