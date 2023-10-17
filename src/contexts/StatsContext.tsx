import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from "react";

export type StatsContextType = {
  stats: string[];
  updateStats: (stat: string) => void;
};

export const StatsContext = createContext<StatsContextType>({
  stats: [],
  updateStats: () => {}
});

export function StatsProvider({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [stats, setStats] = useState<string[]>([]);

  const updateStats = useCallback((stat: string) => {
    console.log("new stat: ", stat);
    const newStats = [...stats, stat];
    setStats(newStats);
  }, []);

  const value = useMemo(() => {
    return {
      stats,
      updateStats
    };
  }, [stats, updateStats]);

  return (
    <StatsContext.Provider value={value}>{children}</StatsContext.Provider>
  );
}

export const useStats = () => {
  const context = useContext(StatsContext);

  if (context === undefined) {
    throw new Error("useStats must be used within StatsContext");
  }

  return context;
};
