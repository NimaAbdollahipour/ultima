import { createContext, useState, useRef } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [selectionMode, setSelectionMode] = useState(false);
  const [visibleDate, setVisibleDate] = useState(false);
  const [showDone, setShowDone] = useState(true);
  const [showCompact, setShowCompact] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <AppContext.Provider
      value={{
        selectionMode,
        setSelectionMode,
        visibleDate,
        setVisibleDate,
        showDone,
        setShowDone,
        showCompact,
        setShowCompact,
        showMenu,
        setShowMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
