import { createContext, ReactNode, useState } from "react";

interface FilterContextProps {
  tools: string[];
  role: string;
  level: string;
  languages: string[];
  setTools: (value: string[]) => void;
  setRole: (value: string) => void;
  setLevel: (value: string) => void;
  setLanguages: (value: string[]) => void;
  addFilter: (type: string, value: string | string[]) => void;
}

export const FilterContext = createContext<FilterContextProps>({
  tools: [] as string[],
  role: "",
  level: "",
  languages: [] as string[],
  setTools: () => {},
  setRole: () => {},
  setLevel: () => {},
  setLanguages: () => {},
  addFilter: () => {},
});

interface ProviderProps {
  children: ReactNode;
}

export function FilterContextProvider({ children }: ProviderProps) {
  const [tools, setTools] = useState<string[]>([]);
  const [role, setRole] = useState("");
  const [level, setLevel] = useState("");
  const [languages, setLanguages] = useState<string[]>([]);

  const addFilter = (type: string, value: string | string[]) => {
    switch (type) {
      case "tools":
        setTools((prevTools) => [
          ...new Set([
            ...prevTools,
            ...(Array.isArray(value) ? value : [value]),
          ]),
        ]);
        break;
      case "role":
        setRole(value as string);
        break;
      case "level":
        setLevel(value as string);
        break;
      case "languages":
        setLanguages((prevLanguages) => [
          ...new Set([
            ...prevLanguages,
            ...(Array.isArray(value) ? value : [value]),
          ]),
        ]);
        break;
      default:
        break;
    }
  };
  return (
    <FilterContext.Provider
      value={{
        tools,
        role,
        level,
        languages,
        setTools,
        setRole,
        setLevel,
        setLanguages,
        addFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
